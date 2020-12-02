package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.PatientEntity;
import com.isw.medical_management_system.model.ServicesEntity;
import com.isw.medical_management_system.repository.PatientRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PatientService {

    @Resource
    private PatientRepository patientRepository;

    public PatientEntity addPatient(PatientEntity patientEntity) {
        patientRepository.save(patientEntity);
        return patientEntity;
    }

    public List<PatientEntity> findAll() {
        return patientRepository.findAll();
    }

}
