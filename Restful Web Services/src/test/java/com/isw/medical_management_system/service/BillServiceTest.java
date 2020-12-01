package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.BillEntity;
import com.isw.medical_management_system.model.ServicesEntity;
import com.isw.medical_management_system.repository.BillRepository;
import org.junit.Rule;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import java.util.ArrayList;
import java.util.List;

import java.util.Date;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

public class BillServiceTest {

    @Mock
    BillRepository billRepository;

    @InjectMocks
    BillService billService;

    @Rule
    public MockitoRule rule = MockitoJUnit.rule();

    @Test
    public void shouldReturnCorrectCreateBill(){
        ServicesEntity servicesEntity = new ServicesEntity(1, "Testing", 200);
        List services = new ArrayList();
        services.add(servicesEntity);
        BillEntity billEntity = new BillEntity(1,services,new Date(2020,12,07));

        billService.addBill(billEntity);
        verify(billRepository,times(1)).save(billEntity);
    }
}
