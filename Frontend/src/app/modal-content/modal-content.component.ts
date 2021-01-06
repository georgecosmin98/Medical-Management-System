import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DoctorService } from '../api/'
@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  @Input() public user;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  form: any = {};

  constructor(public activeModal: NgbActiveModal, private doctorService:DoctorService) { }

  ngOnInit(): void {
    console.log(this.user);
  }


  register(f: NgForm) {
    this.doctorService.add(f.value).subscribe(() => { })
    location.reload();
  }

}


