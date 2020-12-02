package com.isw.medical_management_system.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name= "t_services")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ServicesEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private String servicesID;
    private String servicesName;
    private float amount;

}
