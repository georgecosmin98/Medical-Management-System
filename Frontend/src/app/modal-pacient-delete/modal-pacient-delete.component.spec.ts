import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPacientDeleteComponent } from './modal-pacient-delete.component';

describe('ModalPacientDeleteComponent', () => {
  let component: ModalPacientDeleteComponent;
  let fixture: ComponentFixture<ModalPacientDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPacientDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPacientDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
