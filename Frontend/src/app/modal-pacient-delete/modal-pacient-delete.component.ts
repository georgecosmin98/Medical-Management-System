import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { PacientService } from '../api/'


@Component({
  selector: 'app-modal-pacient-delete',
  templateUrl: './modal-pacient-delete.component.html',
  styleUrls: ['./modal-pacient-delete.component.scss']
})
export class ModalPacientDeleteComponent implements OnInit {
  rows: any;
  j: string;

  constructor(public activeModal: NgbActiveModal, public pacientService: PacientService) { }

  ngOnInit(): void {
  }

  getData() {
    this.pacientService.pacientSearchAll().subscribe(res => {
      this.rows = res;
    })
  }

  delete1(id) {
    console.log(this.j);
    this.pacientService.deleteData(this.j).subscribe(res => {
      this.getData()

      console.log("delete");
      location.reload();
    })

  }
}


