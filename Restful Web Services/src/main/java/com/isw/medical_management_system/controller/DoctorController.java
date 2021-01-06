package com.isw.medical_management_system.controller;

import com.isw.medical_management_system.model.DoctorEntity;
import com.isw.medical_management_system.service.DoctorService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/doctor")
@CrossOrigin("http://localhost:4200")
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
    @ResponseStatus(HttpStatus.OK)
    public DoctorEntity updateDoctor(@RequestBody DoctorEntity doctorEntity, @PathVariable String id) {
        return doctorService.updateDoctor(doctorEntity, id);
    }

    @PutMapping("/deleteDoctor/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteDoctor(@PathVariable String id){
        doctorService.deleteById(id);
    }
}
