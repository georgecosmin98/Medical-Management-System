package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.DoctorEntity;
import com.isw.medical_management_system.repository.DoctorRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DoctorService {

    @Resource
    private DoctorRepository doctorRepository;

    public DoctorEntity addDoctor(DoctorEntity doctorEntity) {
        doctorRepository.save(doctorEntity);
        return doctorEntity;
    }

    public List<DoctorEntity> findAll(){
        return doctorRepository.findAll();
    }

    public Optional<DoctorEntity> findById(String id){
        return doctorRepository.findById(id);
    }

    public void deleteById(String id) { doctorRepository.deleteById(id); }
}
