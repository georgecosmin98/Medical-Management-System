package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.ServicesEntity;
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

public class ServicesServiceTest {

    @Mock
    ServicesRepository servicesRepository;

    @InjectMocks
    ServicesService servicesService;

    @Rule
    public MockitoRule rule = MockitoJUnit.rule();

    @Test
    public void shouldReturnCorrectCreateServices() {
        ServicesEntity servicesEntity = new ServicesEntity("1", "Testing", 200);
        servicesService.addServices(servicesEntity);
        verify(servicesRepository, times(1)).save(servicesEntity);
    }

    @Test
    public void shouldReturnAllServices() {
        List services = new LinkedList();
        services.add(new ServicesEntity("1", "Testing", 200));
        services.add(new ServicesEntity("2", "Testing", 200));

        //Return all mocked result set on find
        when(servicesRepository.findAll()).thenReturn(services);

        //Call the main method you want to test
        List result = servicesService.findAll();

        //Verify if the method was called
        verify(servicesRepository).findAll();
    }

    @Test
    public void shoulReturnCorrectServicesById() {
        ServicesEntity servicesEntity = new ServicesEntity("1", "Testing", 200);

        //Return all mocked result set on find
        when(servicesRepository.findById("1")).thenReturn(java.util.Optional.of(servicesEntity));

        //Call the main method you want to test
        Optional<ServicesEntity> result = servicesService.findById(1);

        //Verify if the method was called
        verify(servicesRepository).findById("1");
    }
}
