package com.isw.medical_management_system.controller;

import com.isw.medical_management_system.model.DoctorEntity;
import com.isw.medical_management_system.repository.DoctorRepository;
import com.isw.medical_management_system.service.DoctorService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/doctor")
@CrossOrigin("*")
public class DoctorController {

    @Resource
    private DoctorService doctorService;

    @Resource
    private DoctorRepository doctorRepository;

    @PostMapping("/addDoctor")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public HttpStatus addDoctor(@RequestBody DoctorEntity doctorEntity) {

        if(!doctorRepository.existsByCNP(doctorEntity.getCNP())) {
            doctorRepository.save(doctorEntity);
            return HttpStatus.CREATED;
        }
        return HttpStatus.CONFLICT;
    }

    @GetMapping("/listOfDoctors")
    @ResponseStatus(HttpStatus.OK)
    public List<DoctorEntity> getDoctors() {
        return doctorService.findAll();
    }

    @PutMapping("/updateDoctor/{id}")
    @ResponseStatus(HttpStatus.OK)
    public DoctorEntity updateDoctor(@RequestBody DoctorEntity doctorEntity, @PathVariable String id) {
        return doctorService.updateDoctor(doctorEntity, id);
    }

    @DeleteMapping("/deleteDoctor/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteDoctor(@PathVariable String id){
        doctorService.deleteById(id);
    }


    @PutMapping(value = "/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public DoctorEntity update(@PathVariable String id, @RequestBody DoctorEntity doctorEntity) {
        return doctorService.update(id, doctorEntity);
    }
}
