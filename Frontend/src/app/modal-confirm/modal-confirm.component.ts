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

  constructor(public activeModal: NgbActiveModal, public doctorService:DoctorService) { }

  ngOnInit(): void {
  }

  getData(){
    this.doctorService.doctorSearchAll().subscribe(res=>
      {
        this.rows = res;
      })
}
delete1(j){
  this.doctorService.deleteData(j.value).subscribe(res=>
    {
      this.getData()
      console.log("delete");
      location.reload();
    })

}
}
