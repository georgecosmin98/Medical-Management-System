package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.BillEntity;
import com.isw.medical_management_system.model.ServicesEntity;
import com.isw.medical_management_system.repository.BillRepository;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import java.util.*;

import static org.mockito.Mockito.*;

public class BillServiceTest {
    private BillEntity firstBill, secondBill;
    private ServicesEntity servicesEntity;
    private List bills,services;

    @Mock
    BillRepository billRepository;

    @InjectMocks
    BillService billService;

    @Rule
    public MockitoRule rule = MockitoJUnit.rule();

    @Before
    public void setUp() throws Exception {
        bills = new LinkedList();
        services = new ArrayList();

        servicesEntity = new ServicesEntity("1", "Testing", 200);
        services.add(servicesEntity);
        firstBill = new BillEntity("1", services, new Date(2020, 12, 07));
        secondBill = new BillEntity("2", services, new Date(2020, 10, 12));
        bills.add(firstBill);
        bills.add(secondBill);
          }

    @Test
    public void shouldReturnCorrectCreateBill() {

        //Call method we want to test
        billService.addBill(firstBill);

        //Verify number of invocations method
        verify(billRepository, times(1)).save(firstBill);
    }

    @Test
    public void shouldReturnAllBills() {

        //Return all mocked result set on find
        when(billRepository.findAll()).thenReturn(bills);

        //Call method we want to test
        billService.findAll();

        //Verify number of invocations method
        verify(billRepository).findAll();
    }

    @Test
    public void shoulReturnCorrectBillById() {

        //Return all mocked result set on find
        when(billRepository.findById("1")).thenReturn(Optional.of(firstBill));

        //Call method we want to test
        billService.findById(1);

        //Verify number of invocations method
        verify(billRepository).findById("1");
    }

    @Test
    public void shouldDeleteBillCorrectly() {

        //Call method we want to test
        billService.deleteById("1");

        //Verify number of invocations method
        verify(billRepository, times(1)).deleteById(firstBill.getBillID());
    }
}
