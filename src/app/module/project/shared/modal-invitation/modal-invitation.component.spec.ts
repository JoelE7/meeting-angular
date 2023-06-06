import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInvitationComponent } from './modal-invitation.component';

describe('ModalInvitationComponent', () => {
  let component: ModalInvitationComponent;
  let fixture: ComponentFixture<ModalInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInvitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
