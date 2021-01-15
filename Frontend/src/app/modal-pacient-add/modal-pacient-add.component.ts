import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { PacientService } from '../api/'

@Component({
  selector: 'app-modal-pacient-add',
  templateUrl: './modal-pacient-add.component.html',
  styleUrls: ['./modal-pacient-add.component.scss']
})
export class ModalPacientAddComponent implements OnInit {
  @Input() public user;
  form: any = {};

  constructor(public activeModal: NgbActiveModal, private pacientService : PacientService) { }

  ngOnInit(): void {
    console.log(this.user);
  }

  register(f: NgForm) {
    this.pacientService.addPacient(f.value).subscribe(() => { })
    // location.reload();
  }

}
