package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.PatientEntity;
import com.isw.medical_management_system.repository.PatientRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

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

    public Optional<PatientEntity> findById(String id) {
        return patientRepository.findById(String.valueOf(id));
    }

    public void deleteById(String id) {
        patientRepository.deleteById(id);
    }

    public PatientEntity updatePatient(PatientEntity patientEntity,
                                       String id) {
        PatientEntity dbPatient = patientRepository.findById(id).orElse(null);
        if (dbPatient != null) {
            dbPatient.setAddress(patientEntity.getAddress());
            dbPatient.setPhoneNumber(patientEntity.getPhoneNumber());
            dbPatient.setFullName(patientEntity.getFullName());
            dbPatient.setAge(patientEntity.getAge());
            dbPatient.setSex(patientEntity.getSex());
            dbPatient.setPrescription(patientEntity.getPrescription());

            return patientRepository.save(dbPatient);
        }
        return null;
    }
}
