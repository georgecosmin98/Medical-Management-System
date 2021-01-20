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

    public List<DoctorEntity> findAll() {
        return doctorRepository.findAll();
    }

    public Optional<DoctorEntity> findById(String id) {
        return doctorRepository.findById(id);
    }

    public void deleteById(String id) {
        doctorRepository.deleteById(id);
    }

    public DoctorEntity updateDoctor(DoctorEntity doctorEntity, String id) {
        DoctorEntity dbDoctor = doctorRepository.findById(id).orElse(null);
        if (dbDoctor != null) {
            dbDoctor.setPhoneNumber(doctorEntity.getPhoneNumber());
            return doctorRepository.save(dbDoctor);
        }
        return null;
    }

    public DoctorEntity update(String id, DoctorEntity doctorEntity) {
        List<DoctorEntity> idSearch = doctorRepository.findAllById(id);
        DoctorEntity search = idSearch.get(0);
        search.setFullName(doctorEntity.getFullName());
        search.setEmailAddress(doctorEntity.getEmailAddress());
        search.setPhoneNumber(doctorEntity.getPhoneNumber());
        search.setDepartment(doctorEntity.getDepartment());
        search.setSpecialization(doctorEntity.getSpecialization());
        search.setSalary(doctorEntity.getSalary());
        search.setCNP(doctorEntity.getCNP());
        search = doctorRepository.save(search);

        return search;

    }
}
