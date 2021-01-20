import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPacientUpdateComponent } from './modal-pacient-update.component';

describe('ModalPacientUpdateComponent', () => {
  let component: ModalPacientUpdateComponent;
  let fixture: ComponentFixture<ModalPacientUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPacientUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPacientUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
