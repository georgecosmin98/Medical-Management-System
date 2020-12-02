package com.isw.medical_management_system.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name= "t_services")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ServicesEntity {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String servicesID;
    private String servicesName;
    private float amount;

}
