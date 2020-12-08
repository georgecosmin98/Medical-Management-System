package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.DoctorEntity;
import com.isw.medical_management_system.repository.DoctorRepository;
import org.junit.Rule;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import static org.mockito.Mockito.*;

public class DoctorServiceTest {

    @Mock
    DoctorRepository doctorRepository;

    @InjectMocks
    DoctorService doctorService;

    @Rule
    public MockitoRule rule = MockitoJUnit.rule();

    @Test
    public void shouldReturnCorrectCreateDoctor(){
        DoctorEntity doctorEntity = new DoctorEntity("1","myName","myEmail","myNumber","myDep","mySpec",2000);

        //Call method we want to test
        doctorService.addDoctor(doctorEntity);

        //Verify number of invocations method
        verify(doctorRepository,times(1)).save(doctorEntity);
    }
}
