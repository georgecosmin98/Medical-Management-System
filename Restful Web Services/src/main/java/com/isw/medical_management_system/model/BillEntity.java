package com.isw.medical_management_system.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.GenericGenerator;

import java.util.Date;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="t_bills")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BillEntity {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String billID;
    @OneToMany(cascade={CascadeType.ALL})
    @Fetch(FetchMode.JOIN)
    private List<ServicesEntity> services;
    private Date invoiceDate;
}
