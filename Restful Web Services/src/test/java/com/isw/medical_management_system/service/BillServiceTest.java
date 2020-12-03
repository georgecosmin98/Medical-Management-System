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

import java.util.*;

import static org.mockito.Mockito.*;

public class BillServiceTest {

    @Mock
    BillRepository billRepository;

    @InjectMocks
    BillService billService;

    @Rule
    public MockitoRule rule = MockitoJUnit.rule();

    @Test
    public void shouldReturnCorrectCreateBill() {
        ServicesEntity servicesEntity = new ServicesEntity("1", "Testing", 200);
        List services = new ArrayList();
        services.add(servicesEntity);
        BillEntity billEntity = new BillEntity("1", services, new Date(2020, 12, 07));

        //Call method we want to test
        billService.addBill(billEntity);

        //Verify number of invocations method
        verify(billRepository, times(1)).save(billEntity);
    }

    @Test
    public void shouldReturnAllBills() {
        List bills = new LinkedList();
        ServicesEntity servicesEntity = new ServicesEntity("1", "Testing", 200);
        List services = new ArrayList();
        services.add(servicesEntity);
        bills.add(new BillEntity("1", services, new Date(2020, 10, 12)));
        bills.add(new BillEntity("2", services, new Date(2020, 10, 12)));

        //Return all mocked result set on find
        when(billRepository.findAll()).thenReturn(bills);

        //Call method we want to test
        billService.findAll();

        //Verify number of invocations method
        verify(billRepository).findAll();
    }

    @Test
    public void shoulReturnCorrectBillById() {
        ServicesEntity servicesEntity = new ServicesEntity("1", "Testing", 200);
        List services = new ArrayList();
        services.add(servicesEntity);
        BillEntity billEntity = new BillEntity("1", services, new Date(2020, 10, 12));

        //Return all mocked result set on find
        when(billRepository.findById("1")).thenReturn(Optional.of(billEntity));

        //Call method we want to test
        billService.findById(1);

        //Verify number of invocations method
        verify(billRepository).findById("1");
    }

    @Test
    public void shouldDeleteBillCorrectly() {
        ServicesEntity servicesEntity = new ServicesEntity("1", "Testing", 50);
        List services = new ArrayList();
        services.add(servicesEntity);
        BillEntity billEntity = new BillEntity("1", services, new Date(2020, 12, 02));

        //Call method we want to test
        billService.deleteById("1");

        //Verify number of invocations method
        verify(billRepository, times(1)).deleteById(billEntity.getBillID());
    }
}
