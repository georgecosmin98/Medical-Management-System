package com.isw.medical_management_system.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "t_patient")
@Getter
@Setter
@NoArgsConstructor
public class PatientEntity extends PersonEntity {

    private String address;
    private int age;
    private String sex;

    @Builder
    public PatientEntity(String id, String fullName, String phoneNumber, String emailAddress, String address, int age, String sex) {
        super(id, fullName, phoneNumber, emailAddress);
        this.address = address;
        this.age = age;
        this.sex = sex;
    }

}
