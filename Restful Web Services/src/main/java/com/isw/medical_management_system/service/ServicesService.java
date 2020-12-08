package com.isw.medical_management_system.service;

import com.isw.medical_management_system.model.ServicesEntity;
import com.isw.medical_management_system.repository.ServicesRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServicesService {

    @Resource
    private ServicesRepository servicesRepository;

    public ServicesEntity addServices(ServicesEntity servicesEntity) {
        servicesRepository.save(servicesEntity);
        return servicesEntity;
    }

    public List<ServicesEntity> findAll() {
        return servicesRepository.findAll();
    }

    public Optional<ServicesEntity> findById(String id) { return servicesRepository.findById(id); }

    public void deleteById(String id) { servicesRepository.deleteById(id); }

}

