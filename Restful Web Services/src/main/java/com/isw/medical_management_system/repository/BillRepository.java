package com.isw.medical_management_system.repository;

import com.isw.medical_management_system.model.BillEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<BillEntity, String> {
}
