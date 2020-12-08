package com.isw.medical_management_system.controller;

import com.isw.medical_management_system.model.DoctorEntity;
import com.isw.medical_management_system.service.DoctorService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.print.Doc;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

    @Resource
    private DoctorService doctorService;

    @PostMapping("/addDoctor")
    @ResponseStatus(HttpStatus.CREATED)
    public DoctorEntity addDoctor(@RequestBody DoctorEntity doctorEntity) {
        return doctorService.addDoctor(doctorEntity);
    }

    @GetMapping("/listOfDoctors")
    public List<DoctorEntity> getDoctors() {
        return doctorService.findAll();
    }

    @PutMapping("/updateDoctor/{id}")
    public DoctorEntity updateDoctor(@RequestBody DoctorEntity doctorEntity, @PathVariable String id) {
        return doctorService.updateDoctor(doctorEntity, id);
    }
}
