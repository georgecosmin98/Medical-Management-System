package com.isw.medical_management_system.repository;

import com.isw.medical_management_system.model.DoctorEntity;
import com.isw.medical_management_system.model.PatientEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface PatientRepository extends JpaRepository<PatientEntity, String> {

    List<PatientEntity> findAllById(String id);

    @Transactional
    void deleteById(String id);
}
