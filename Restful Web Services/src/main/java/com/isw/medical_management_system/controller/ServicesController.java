package com.isw.medical_management_system.controller;

import com.isw.medical_management_system.model.ServicesEntity;
import com.isw.medical_management_system.repository.ServicesRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/services")
public class ServicesController {

    @Resource
    private ServicesRepository servicesRepository;

    @PostMapping("/addServices")
    @ResponseStatus(HttpStatus.CREATED)
    public ServicesEntity addServices(@RequestBody ServicesEntity servicesEntity){
        return servicesRepository.save(servicesEntity);
    }

    @GetMapping("/listOfServices")
    @ResponseStatus(HttpStatus.OK)
    public List<ServicesEntity> getServices() {
        return servicesRepository.findAll();
    }
}
