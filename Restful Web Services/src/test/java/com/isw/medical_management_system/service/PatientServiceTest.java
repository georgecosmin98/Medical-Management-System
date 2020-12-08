package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.PatientEntity;
import com.isw.medical_management_system.repository.PatientRepository;
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

public class PatientServiceTest {

    @Mock
    PatientRepository patientRepository;

    @InjectMocks
    PatientService patientService;

    @Rule
    public MockitoRule rule = MockitoJUnit.rule();

    @Test
    public void shouldReturnCorrectCreatePatient() {
        PatientEntity patientEntity = new PatientEntity("1","myFullName","myPhone","myEmail","myAddr",20,"M");

        //Call method we want to test
        patientService.addPatient(patientEntity);

        //Verify number of invocations method
        verify(patientRepository, times(1)).save(patientEntity);
    }

    @Test
    public void shouldReturnAllPatients() {
        List patient = new LinkedList();
        patient.add(new PatientEntity("1","myFullName","myPhone","myEmail","myAddr",20,"M"));
        patient.add(new PatientEntity("2","myFullName2","myPhone2","myEmail2","myAddr2",25,"F"));

        //Return all mocked result set on find
        when(patientRepository.findAll()).thenReturn(patient);

        //Call method we want to test
        patientService.findAll();

        //Verify if the method was called
        verify(patientRepository).findAll();
    }

    @Test
    public void shoulReturnCorrectPatientById() {
        PatientEntity patientEntity = new PatientEntity("1","myFullName","myPhone","myEmail","myAddr",20,"M");

        //Return all mocked result set on find
        when(patientRepository.findById("1")).thenReturn(Optional.of(patientEntity));

        //Call method we want to test
        patientService.findById("1");

        //Verify if the method was called
        verify(patientRepository).findById("1");
    }

    @Test
    public void shouldDeletePatientCorrectly()
    {
        PatientEntity patientEntity = new PatientEntity("1","myFullName","myPhone","myEmail","myAddr",20,"M");

        //Call method we want to test
        patientService.deleteById("1");

        //Verify if method was called
        verify(patientRepository).deleteById("1");
    }
}
