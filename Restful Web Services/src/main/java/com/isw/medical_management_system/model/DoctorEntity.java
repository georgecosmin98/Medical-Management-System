package com.isw.medical_management_system.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="t_doctor")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DoctorEntity extends PersonEntity{

    private String department;
    private String specialization;
    private int salary;
}
