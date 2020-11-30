package com.isw.medical_management_system.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int billID;
    private Date invoiceDate;

}
