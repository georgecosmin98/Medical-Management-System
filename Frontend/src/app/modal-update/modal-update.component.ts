import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DoctorService } from '../api/'

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss']
})
export class ModalUpdateComponent implements OnInit {
  rows: any;
  form: any = {};
  j: any;
  

  constructor(public activeModal: NgbActiveModal, private doctorService:DoctorService) { }

  ngOnInit(): void {
  }

  getData(){
    this.doctorService.doctorSearchAll().subscribe(res=>
      {
        this.rows = res;
      })
}

update(j, f: NgForm) {
  console.log(this.j.id);
  this.doctorService.updateDate(this.j.id, f.value).subscribe(() => { })
  location.reload();
}

}
