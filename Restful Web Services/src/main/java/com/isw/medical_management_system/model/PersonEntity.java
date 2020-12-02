package com.isw.medical_management_system.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@Setter
@Getter
public class PersonEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private String id;
    private String phoneNumber;
    private String emailAddress;
}
