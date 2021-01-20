import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DoctorService } from '../api/'

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {
  rows : any;
  j: string;

  constructor(public activeModal: NgbActiveModal, public doctorService:DoctorService) { }

  ngOnInit(): void {
  }

  getData(){
    this.doctorService.doctorSearchAll().subscribe(res=>
      {
        this.rows = res;
      })
}
delete1(id){
  console.log(this.j);
  this.doctorService.deleteData(this.j).subscribe(res=>
    {
      this.getData()
     
      console.log("delete");
      location.reload();
    })
//
}
}
