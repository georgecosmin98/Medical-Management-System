import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit,ViewChild, AfterViewInit, Type, Input} from '@angular/core';
import { DoctorService } from '../api/api/doctor.service'
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component'

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
  name: string;
  name1:string;



  public user = {
    fullName: '',
    emailAddress : '',
    phoneNumber : '',
    department : '',
    specialization : '',
    salary : ''
  }




  constructor(private formBuilder : FormBuilder, private doctService : DoctorService , public router : Router, public modalService: NgbModal) { 

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
      location.reload();
    }

    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator;
    // }

    openModal() {
      const modalRef = this.modalService.open(ModalContentComponent);
      modalRef.componentInstance.user = this.user;
      modalRef.result.then((result) => {
        if (result) {
          console.log(result);
        }
      });
      // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      //   console.log(receivedEntry);
      // })
    }


    searchName() {
      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  
      if (this.name1 != "") {
        this.rows = this.rows.filter(res => {
          return res.name.toLocaleLowerCase().match(this.name1.toLocaleLowerCase());
        });
  
      } else if (this.name1 == "") {
        this.ngOnInit();
      }
    }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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