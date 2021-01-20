package com.isw.medical_management_system.controller;

import com.isw.medical_management_system.model.DoctorEntity;
import com.isw.medical_management_system.model.PatientEntity;
import com.isw.medical_management_system.repository.PatientRepository;
import com.isw.medical_management_system.service.PatientService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientController {

    @Resource
    private PatientService patientService;

    @Resource
    private PatientRepository patientRepository;

    @PostMapping("/addPatient")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public HttpStatus addPatient(@RequestBody PatientEntity patientEntity) {
        if(!patientRepository.existsByCNP(patientEntity.getCNP())) {
            patientRepository.save(patientEntity);
            return HttpStatus.CREATED;
        }
        return HttpStatus.CONFLICT;
    }

    @GetMapping("/listOfPatient")
    @ResponseStatus(HttpStatus.OK)
    public List<PatientEntity> getPatient() {
        return patientService.findAll();
    }

    @DeleteMapping("/deletePatient/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePatient(@PathVariable String id) {
        patientService.deleteById(id);
    }

//    @PutMapping("/updatePatient/{id}")
//    @ResponseStatus(HttpStatus.OK)
//    public PatientEntity updatePatient(@RequestBody PatientEntity patientEntity, @PathVariable String id)
//    {
//        return patientService.updatePatient(patientEntity, id);
//    }

    @PutMapping(value = "/updatePatient/{id}")
    @ResponseStatus(HttpStatus.OK)
    public PatientEntity updatePatient(@PathVariable String id, @RequestBody PatientEntity patientEntity) {
        return patientService.updatePatient(id, patientEntity);
    }

}
