package com.isw.medical_management_system.repository;

import com.isw.medical_management_system.model.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<AdminEntity, String> {
}
