package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.ServicesEntity;
import com.isw.medical_management_system.repository.ServicesRepository;
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

public class ServicesServiceTest {
    private ServicesEntity firstService, secondService;

    @Mock
    ServicesRepository servicesRepository;

    @InjectMocks
    ServicesService servicesService;

    @Rule
    public MockitoRule rule = MockitoJUnit.rule();

    @Before
    public void setUp() throws Exception {
        firstService = new ServicesEntity("1", "Testing", 200);
        secondService = new ServicesEntity("2", "Testing", 200);
    }

    @Test
    public void shouldReturnCorrectCreateServices() {

        //Call method we want to test
        servicesService.addServices(firstService);

        //Verify number of invocations method
        verify(servicesRepository, times(1)).save(firstService);
    }

    @Test
    public void shouldReturnAllServices() {
        List services = new LinkedList();
        services.add(firstService);
        services.add(secondService);

        //Return all mocked result set on find
        when(servicesRepository.findAll()).thenReturn(services);

        //Call method we want to test
        servicesService.findAll();

        //Verify number of invocations method
        verify(servicesRepository).findAll();
    }

    @Test
    public void shoulReturnCorrectServicesById() {
        //Return all mocked result set on find
        when(servicesRepository.findById("1")).thenReturn(java.util.Optional.of(firstService));

        //Call method we want to test
        servicesService.findById("1");

        //Verify number of invocations method
        verify(servicesRepository).findById("1");
    }

    @Test
    public void shouldUpdateService() {
        servicesService.addServices(firstService);

        firstService.setServicesName("OtherServiceName");
        firstService.setAmount(1500);

        //Call method we want to test
        servicesService.updateService(firstService, firstService.getServicesID());

        //Verify if the method was called
        verify(servicesRepository).save(firstService);
    }
}
