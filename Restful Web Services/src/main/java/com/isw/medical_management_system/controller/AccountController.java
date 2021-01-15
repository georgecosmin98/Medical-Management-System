package com.isw.medical_management_system.controller;

import com.isw.medical_management_system.model.ApplicationUserEntity;
import com.isw.medical_management_system.repository.ApplicationUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class AccountController {
    private ApplicationUserRepository applicationUserRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public AccountController(ApplicationUserRepository applicationUserRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.applicationUserRepository = applicationUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping("/sign-up")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public HttpStatus signUp(@RequestBody ApplicationUserEntity user) {

        if(!applicationUserRepository.existsApplicationUserEntityByUsername(user.getUsername())) {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            applicationUserRepository.save(user);
            return HttpStatus.CREATED;
        }
        return HttpStatus.CONFLICT;
        }

    }
