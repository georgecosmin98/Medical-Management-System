package com.isw.medical_management_system.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="t_doctor")
@NoArgsConstructor
@Getter
@Setter
public class DoctorEntity extends PersonEntity{

    private String department;
    private String specialization;
    private int salary;

    @Builder
    public DoctorEntity (String id, String fullName, String emailAddress, String phoneNumber, String department, String specialization, int salary){
        super(id,fullName,phoneNumber,emailAddress);
        this.department = department;
        this.specialization = specialization;
        this.salary = salary;
    }
}
