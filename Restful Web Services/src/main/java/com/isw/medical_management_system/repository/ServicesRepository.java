package com.isw.medical_management_system.repository;

import com.isw.medical_management_system.model.ServicesEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesRepository extends JpaRepository<ServicesEntity,String> {
}
