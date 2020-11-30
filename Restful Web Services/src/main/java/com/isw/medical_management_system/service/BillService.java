package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.BillEntity;
import com.isw.medical_management_system.model.ServicesEntity;
import com.isw.medical_management_system.repository.BillRepository;
import com.isw.medical_management_system.repository.ServicesRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.transaction.Transactional;

@Service
@Transactional
public class BillService {

    @Resource
    private BillRepository billRepository;

    public BillRepository addBill(BillEntity billEntity) {
        billRepository.save(billEntity);
        return billRepository;
    }

}
