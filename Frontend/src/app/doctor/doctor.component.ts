import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit,ViewChild, AfterViewInit, Type, Input} from '@angular/core';
import { DoctorService } from '../api/api/doctor.service'
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  form: any = {};
  displayedColumns: string[] = ['id','fullName', 'emailAddress', 'phoneNumber', 'department', 'specialization', 'salary'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;
  public rows: any;





  constructor(private formBuilder : FormBuilder, private doctService : DoctorService , public router : Router) { 

  }
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 


  ngOnInit(): void {

    this.doctService.doctorSearchAll().subscribe((res)=> {
      //  this.dateFromBackend = res.map(object => object.data)
      

      // console.log(this.dateFromBackend)
      this.rows = res
      // console.log(this.rows);
      
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })


    }

    register(f: NgForm) {
      this.doctService.add(f.value).subscribe(() => { })
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

  
}



export interface PeriodicElement {
    id?: string;
    fullName?: string;
    emailAdress?: string;
    phoneNumber?: string;
    department?: string;
    specialization?: string;
    salary?: number;
}