package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.DoctorEntity;
import com.isw.medical_management_system.repository.DoctorRepository;
import org.junit.Before;
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
    private DoctorEntity firstDoctor, secondDoctor;

    @Mock
    DoctorRepository doctorRepository;

    @InjectMocks
    DoctorService doctorService;

    @Rule
    public MockitoRule rule = MockitoJUnit.rule();

    @Before
    public void setUp(){
        firstDoctor = new DoctorEntity("1", "myName", "myEmail","1234", "myNumber", "myDep", "mySpec", 2000);
        secondDoctor = new DoctorEntity("2", "myName1", "myEmail1","1234", "myNumber1", "myDep1", "mySpec1", 3000);
    }

    @Test
    public void shouldReturnCorrectCreateDoctor() {
        //Call method we want to test
        doctorService.addDoctor(firstDoctor);

        //Verify number of invocations method
        verify(doctorRepository, times(1)).save(firstDoctor);
    }

    @Test
    public void shouldReturnAllDoctors() {
        List doctors = new LinkedList();
        doctors.add(firstDoctor);
        doctors.add(secondDoctor);

        //Return all mocked result set on find
        when(doctorRepository.findAll()).thenReturn(doctors);

        //Call method we want to test
        doctorService.findAll();

        //Verify if the method was called
        verify(doctorRepository).findAll();
    }

    @Test
    public void shouldDeleteDoctor() {

        //Call method we want to test
        doctorService.deleteById("1");

        //Verify if method was called
        verify(doctorRepository).deleteById("1");
    }

    @Test
    public void shouldReturnUpdateDoctor() {

        doctorService.addDoctor(firstDoctor);

        firstDoctor.setPhoneNumber("newPhone");
        //Call method we want to test
        doctorService.updateDoctor(firstDoctor, "1");

        //Verify if method was called
        verify(doctorRepository).save(firstDoctor);
    }
}
