import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPacientAddComponent } from './modal-pacient-add.component';

describe('ModalPacientAddComponent', () => {
  let component: ModalPacientAddComponent;
  let fixture: ComponentFixture<ModalPacientAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPacientAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPacientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
