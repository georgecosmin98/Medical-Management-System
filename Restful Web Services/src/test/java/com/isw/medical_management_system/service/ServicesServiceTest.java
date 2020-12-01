package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.ServicesEntity;
import com.isw.medical_management_system.repository.ServicesRepository;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

public class ServicesServiceTest {

    @Mock
    ServicesRepository servicesRepository;

    @InjectMocks
    ServicesService servicesService;

    @Before
    public void init(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void shouldReturnCorrectCreateServices(){
        ServicesEntity servicesEntity = new ServicesEntity(1,"Testing",200);
        servicesService.addServices(servicesEntity);
        verify(servicesRepository,times(1)).save(servicesEntity);
    }

}
