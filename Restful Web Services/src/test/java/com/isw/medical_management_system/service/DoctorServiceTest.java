package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.DoctorEntity;
import com.isw.medical_management_system.repository.DoctorRepository;
import org.junit.Rule;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import java.util.LinkedList;
import java.util.List;

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

    @Test
    public void shouldReturnAllDoctors(){
        List doctors = new LinkedList();
        doctors.add(new DoctorEntity("1","myName","myEmail","myNumber","myDep","mySpec",2000));
        doctors.add(new DoctorEntity("2","myName1","myEmail1","myNumber1","myDep1","mySpec1",3000));

        //Return all mocked result set on find
        when(doctorRepository.findAll()).thenReturn(doctors);

        //Call method we want to test
        doctorService.findAll();

        //Verify if the method was called
        verify(doctorRepository).findAll();
    }

    @Test
    public void shouldDeleteDoctor()
    {
        DoctorEntity doctorEntity = new DoctorEntity("1", "MyName", "MyEmailAdress", "myPhoneNumber", "ORL", "MyJob", 1500);

        //Call method we want to test
        doctorService.deleteById("1");

        //Verify if method was called
        verify(doctorRepository).deleteById("1");
    }

    @Test
    public void shouldReturnUpdateDoctor(){
        DoctorEntity doctorEntity1 = new DoctorEntity("1", "MyName", "MyEmailAdress", "myPhoneNumber", "ORL", "MyJob", 1500);
        doctorService.addDoctor(doctorEntity1);

        doctorEntity1.setPhoneNumber("newPhone");
        //Call method we want to test
        doctorService.updateDoctor(doctorEntity1,"1");

        //Verify if method was called
        verify(doctorRepository).save(doctorEntity1);
    }
}
