package com.isw.medical_management_system.controller;

import com.isw.medical_management_system.model.DoctorEntity;
import com.isw.medical_management_system.service.DoctorService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

    @Resource
    private DoctorService doctorService;

    @PostMapping("/addDoctor")
    @ResponseStatus(HttpStatus.CREATED)
    public DoctorEntity addDoctor(@RequestBody DoctorEntity doctorEntity){
        return doctorService.addDoctor(doctorEntity);
    }

    @GetMapping("listOfDoctors")
    public List<DoctorEntity> getDoctors(){
        return doctorService.findAll();
    }

    @DeleteMapping("/deleteDoctor/{id}")
    public void deleteDoctor(@PathVariable String id){ doctorService.deleteById(id); }
}
