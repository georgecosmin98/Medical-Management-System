package com.isw.medical_management_system.repository;

import com.isw.medical_management_system.model.ApplicationUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationUserRepository extends JpaRepository<ApplicationUserEntity,Long> {
    ApplicationUserEntity findByUsername(String username);
}
