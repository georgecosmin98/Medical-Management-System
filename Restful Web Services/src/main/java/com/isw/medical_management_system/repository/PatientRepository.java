package com.isw.medical_management_system.repository;

import com.isw.medical_management_system.model.PatientEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<PatientEntity, String> {
}
