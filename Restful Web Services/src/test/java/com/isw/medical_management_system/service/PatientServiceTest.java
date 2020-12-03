package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.PatientEntity;
import com.isw.medical_management_system.model.ServicesEntity;
import com.isw.medical_management_system.repository.PatientRepository;
import com.isw.medical_management_system.repository.ServicesRepository;
import org.junit.Rule;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

public class PatientServiceTest {

    @Mock
    PatientRepository patientRepository;

    @InjectMocks
    PatientService patientService;

    @Rule
    public MockitoRule rule = MockitoJUnit.rule();

    @Test
    public void shouldReturnCorrectCreatePatient() {
        PatientEntity patientEntity = new PatientEntity("myAdr", 25, "M");
        patientService.addPatient(patientEntity);
        verify(patientRepository, times(1)).save(patientEntity);
    }

    @Test
    public void shouldReturnAllPatient() {
        List patient = new LinkedList();
        patient.add(new PatientEntity("myAdr", 20, "M"));
        patient.add(new PatientEntity("Add", 35, "F"));

        //Return all mocked result set on find
        when(patientRepository.findAll()).thenReturn(patient);

        //Call the main method you want to test
        patientService.findAll();

        //Verify if the method was called
        verify(patientRepository).findAll();
    }

    @Test
    public void shoulReturnCorrectPatientById() {
        PatientEntity patientEntity = new PatientEntity("myArd", 20, "M");

        //Return all mocked result set on find
        when(patientRepository.findById("1")).thenReturn(Optional.of(patientEntity));

        //Call the main method you want to test
        patientService.findById(1);

        //Verify if the method was called
        verify(patientRepository).findById("1");
    }
}
