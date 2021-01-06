package com.isw.medical_management_system.controller;

import com.isw.medical_management_system.model.BillEntity;
import com.isw.medical_management_system.service.BillService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/bill")
public class BillController {

    @Resource
    private BillService billService;

    @PostMapping("/addBill")
    @ResponseStatus(HttpStatus.CREATED)
    public BillEntity addBill(@RequestBody BillEntity billEntity){
        return billService.addBill(billEntity);
    }

    @GetMapping("/listOfBills")
    @ResponseStatus(HttpStatus.OK)
    public List<BillEntity> getBills() {
        return billService.findAll();
    }

    @DeleteMapping("/deleteBill/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBill(@PathVariable String id) {
        billService.deleteById(id);
    }


}
