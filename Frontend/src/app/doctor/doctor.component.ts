import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit, Type, Input, ViewEncapsulation } from '@angular/core';
import { DoctorService } from '../api/api/doctor.service'
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component'
import 'rxjs/Rx';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';
import { TokenStorageService } from '../services/token-storage.service'


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {


  form: any = {};
  displayedColumns: string[] = ['id', 'fullName', 'emailAddress', 'phoneNumber', 'department', 'specialization', 'salary', 'delete', 'update'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;
  public rows: any;
  name: any;
  name1: string;
  confirm: any;




  public user = {
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    department: '',
    specialization: '',
    salary: ''
  }

  id: string;


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];







  constructor(private formBuilder: FormBuilder, private doctService: DoctorService, public router: Router, public modalService: NgbModal, private token: TokenStorageService) {

  }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;






  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.doctService.doctorSearchAll().subscribe((res) => {
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
        return res.fullName.toLocaleLowerCase().match(this.name1.toLocaleLowerCase());
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



  getData() {
    this.doctService.doctorSearchAll().subscribe(res => {
      this.rows = res;
    })
  }
  delete1(j) {
    this.doctService.deleteData(j).subscribe(res => {
      this.getData()
      console.log("delete");
      location.reload();
    })

  }


  deleteWithModal(j) {
    console.log(j);
    const modalRef = this.modalService.open(ModalConfirmComponent);
    modalRef.componentInstance.j = j;
    modalRef.result.then((result) => {
      console.log(result);
      if (result) {
        console.log(result);
        //   this.doctService.deleteData(j).subscribe(res=>
        // {
        //     this.getData()
        //     console.log("delete");
        //   // location.reload();
        // })

      }
    });
  }

  updateWithModal(j) {
    console.log(j);
    const modalRef = this.modalService.open(ModalUpdateComponent);
    modalRef.componentInstance.j = j;
    modalRef.result.then((result) => {
      console.log(result);
      if (result) {
        console.log(result);
        //   this.doctService.deleteData(j).subscribe(res=>
        // {
        //     this.getData()
        //     console.log("delete");
        //   // location.reload();
        // })

      }
    });
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