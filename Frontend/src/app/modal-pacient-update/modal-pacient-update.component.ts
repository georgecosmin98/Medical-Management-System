import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { PacientService } from '../api/'

@Component({
  selector: 'app-modal-pacient-update',
  templateUrl: './modal-pacient-update.component.html',
  styleUrls: ['./modal-pacient-update.component.scss']
})
export class ModalPacientUpdateComponent implements OnInit {
    rows: any;
    form: any = {};
    j: any;


  constructor(public activeModal: NgbActiveModal, private pacientService:PacientService) { }

  ngOnInit(): void {
  }

 getData(){
    this.pacientService.pacientSearchAll().subscribe(res=>
      {
        this.rows = res;
      })
}

  close(){
  this.activeModal.dismiss('Cross click')
  location.reload();
}

  update(j, f: NgForm) {
  console.log(this.j.id);
  this.pacientService.updatePacient(this.j.id, f.value).subscribe(() => { })
  // location.reload();
  }

}
