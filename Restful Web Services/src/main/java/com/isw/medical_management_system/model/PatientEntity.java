package com.isw.medical_management_system.model;

import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "t_patient")
@Getter
@Setter
@NoArgsConstructor
public class PatientEntity extends PersonEntity {

    private String address;
    private int age;
    private String sex;
    //@OneToMany(cascade={CascadeType.ALL})
    //@Fetch(FetchMode.JOIN)
    //private List<PrescriptionEntity> prescription;
    private String prescription;
    @Builder
    public PatientEntity(String id, String fullName, String phoneNumber, String emailAddress,String cnp, String address, int age, String sex, String prescription) {
        super(id, fullName, phoneNumber, emailAddress,cnp);
        this.address = address;
        this.age = age;
        this.sex = sex;
        this.prescription=prescription;
    }


    public String getAddress() {
        return address;
    }

    public int getAge() {
        return age;
    }

    public String getSex() {
        return sex;
    }

    public String getPrescription() {
        return prescription;
    }


    public void setAddress(String address) {
        this.address = address;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setPrescription(String prescription) {
        this.prescription = prescription;
    }
}
