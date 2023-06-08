import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { ModalInvitationComponent } from 'src/app/modules/user/shared/modal-invitation/modal-invitation.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('ModalInvitationComponent', () => {
  let component: ModalInvitationComponent;
  let fixture: ComponentFixture<ModalInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInvitationComponent ],
      providers : [MessageService],
      imports : [PrimengModule,HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule]
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
