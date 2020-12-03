package com.isw.medical_management_system.model;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "t_admin")
@Getter
@Setter
@NoArgsConstructor
public class AdminEntity extends  PersonEntity{

    @Builder
    public AdminEntity(String id, String fullName, String phoneNumber, String emailAddress) {
        super(id, fullName, phoneNumber, emailAddress);
    }
}
