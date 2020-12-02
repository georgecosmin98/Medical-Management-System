package com.isw.medical_management_system.controller;

import com.isw.medical_management_system.model.BillEntity;
import com.isw.medical_management_system.repository.BillRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/bill")
public class BillController {

    @Resource
    private BillRepository billRepository;

    @PostMapping("/addBill")
    @ResponseStatus(HttpStatus.CREATED)
    public BillEntity addBill(@RequestBody BillEntity billEntity){
        return billRepository.save(billEntity);
    }

    @GetMapping("/listOfBills")
    public List<BillEntity> getBills() {
        return billRepository.findAll();
    }

    @DeleteMapping("/deleteBill/{id}")
    public void deleteBill(@PathVariable String id) {
        billRepository.deleteById(id); }
}
