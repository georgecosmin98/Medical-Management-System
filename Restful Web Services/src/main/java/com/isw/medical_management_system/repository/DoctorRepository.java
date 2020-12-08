package com.isw.medical_management_system.repository;

import com.isw.medical_management_system.model.DoctorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<DoctorEntity, String> {
}
