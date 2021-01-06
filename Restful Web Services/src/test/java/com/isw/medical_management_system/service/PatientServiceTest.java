package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.PatientEntity;
import com.isw.medical_management_system.model.PrescriptionEntity;
import com.isw.medical_management_system.repository.PatientRepository;
import org.junit.Before;
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

    private PatientEntity firstPatient, secondPatient;
    private List<PrescriptionEntity> prescriptionList;

    @Mock
    PatientRepository patientRepository;

    @InjectMocks
    PatientService patientService;

    @Rule
    public MockitoRule rule = MockitoJUnit.rule();

    @Before
    public void setUp() throws Exception {
        PrescriptionEntity prescription = new PrescriptionEntity("1","medicineName",2,"administrationTest");
        prescriptionList.add(prescription);
        firstPatient = new PatientEntity("1","myFullName","myPhone","myEmail","myAddr",20,"M",prescriptionList);
        secondPatient = new PatientEntity("2","myFullName2","myPhone2","myEmail2","myAddr2",25,"F",prescriptionList);
    }

    @Test
    public void shouldReturnCorrectCreatePatient() {

        //Call method we want to test
        patientService.addPatient(firstPatient);

        //Verify number of invocations method
        verify(patientRepository, times(1)).save(firstPatient);
    }

    @Test
    public void shouldReturnAllPatients() {
        List patient = new LinkedList();
        patient.add(firstPatient);
        patient.add(secondPatient);

        //Return all mocked result set on find
        when(patientRepository.findAll()).thenReturn(patient);

        //Call method we want to test
        patientService.findAll();

        //Verify if the method was called
        verify(patientRepository).findAll();
    }

    @Test
    public void shoulReturnCorrectPatientById() {

        //Return all mocked result set on find
        when(patientRepository.findById(firstPatient.getId())).thenReturn(Optional.of(firstPatient));

        //Call method we want to test
        patientService.findById(firstPatient.getId());

        //Verify if the method was called
        verify(patientRepository).findById(firstPatient.getId());
    }

    @Test
    public void shouldDeletePatientCorrectly() {

        //Call method we want to test
        patientService.deleteById(firstPatient.getId());

        //Verify if method was called
        verify(patientRepository).deleteById(firstPatient.getId());
    }

    @Test
    public void shouldReturnUpdatePatient(){
        patientService.addPatient(firstPatient);

        firstPatient.setAge(2);

        //Call method we want to test
        patientService.updatePatient(firstPatient,firstPatient.getId());

        //Verify if method was called
        verify(patientRepository).save(firstPatient);
    }
}
