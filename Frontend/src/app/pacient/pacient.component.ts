import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit, Type, Input, ViewEncapsulation } from '@angular/core';
import { PacientService } from '../api/api/pacient.service'
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPacientAddComponent } from '../modal-pacient-add/modal-pacient-add.component';
import 'rxjs/Rx';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';
import { TokenStorageService } from '../services/token-storage.service'


@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.scss']
})
export class PacientComponent implements OnInit {


  form: any = {};
  displayedColumns: string[] = ['id', 'fullName', 'phoneNumber', 'emailAddress', 'address', 'age', 'sex', 'prescription', 'delete', 'update'];
  values: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;
  currentUser: any;
  public rows: any;
  name: any;
  name1: string;
  confirm: any;




  public user = {
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    age: '',
    sex: '',
    prescription: ''
  }

  id: string;


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private formBuilder: FormBuilder, private pactientService: PacientService, public router: Router, public modalService: NgbModal, private token: TokenStorageService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {

    this.pactientService.pacientSearchAll().subscribe((res) => {
      //  this.dateFromBackend = res.map(object => object.data)


      // console.log(this.dateFromBackend)
      this.rows = res
      // console.log(this.rows);

      this.dataSource = new MatTableDataSource(this.rows)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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




  openModal() {
    const modalRef = this.modalService.open(ModalPacientAddComponent);
    modalRef.componentInstance.user = this.user;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });

  }


  getData() {
    this.pactientService.pacientSearchAll().subscribe(res => {
      this.rows = res;
    })
  }
  delete1(j) {
    this.pactientService.deleteData(j).subscribe(res => {
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
      }
    });
  }
}



export interface PeriodicElement {
  id?: string;
  fullName?: string;
  phoneNumber?: string;
  emailAdress?: string;
  address?: string;
  age?: number;
  sex?: string;
  prescription?: string;
}
