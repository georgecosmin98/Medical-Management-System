package com.isw.medical_management_system.repository;

import com.isw.medical_management_system.model.DoctorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface DoctorRepository extends JpaRepository<DoctorEntity, String> {

    List<DoctorEntity> findAllById(String id);
    boolean existsByCNP(String cnp);
    @Transactional
    void deleteById(String id);
}
