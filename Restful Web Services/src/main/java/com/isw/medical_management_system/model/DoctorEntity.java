package com.isw.medical_management_system.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="t_doctor")
@NoArgsConstructor
@Getter
@Setter
public class DoctorEntity extends PersonEntity{

    private String department;
    private String specialization;
    private int salary;

    @Builder
    public DoctorEntity (String id, String fullName, String emailAddress,String cnp, String phoneNumber, String department, String specialization, int salary){
        super(id,fullName,phoneNumber,emailAddress,cnp);
        this.department = department;
        this.specialization = specialization;
        this.salary = salary;
    }

    public String getDepartment() {
        return department;
    }

    public String getSpecialization() {
        return specialization;
    }

    public int getSalary() {
        return salary;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }
}
