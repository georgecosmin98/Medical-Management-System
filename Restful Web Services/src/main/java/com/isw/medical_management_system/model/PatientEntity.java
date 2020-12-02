package com.isw.medical_management_system.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="t_patient")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class PatientEntity extends PersonEntity {

    private String address;
    private int age;
    private String sex;

}
