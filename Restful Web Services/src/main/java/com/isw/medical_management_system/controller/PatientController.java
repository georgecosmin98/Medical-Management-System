package com.isw.medical_management_system.controller;

import com.isw.medical_management_system.model.PatientEntity;
import com.isw.medical_management_system.repository.PatientRepository;
import com.isw.medical_management_system.service.PatientService;
import com.isw.medical_management_system.service.ServicesService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.security.Provider;
import java.util.List;

@RestController
@RequestMapping("/patient")

public class PatientController {

    @Resource
    private PatientService patientService;

    @PostMapping("/addPatient")
    @ResponseStatus(HttpStatus.CREATED)
    public PatientEntity addPatient(@RequestBody PatientEntity patientEntity){
        return patientService.addPatient(patientEntity);
    }

    @GetMapping("/listOfPatient")
    public List<PatientEntity> getPatient() {
        return patientService.findAll();
    }
}