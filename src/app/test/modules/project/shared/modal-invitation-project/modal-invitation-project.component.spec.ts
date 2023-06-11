import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ModalInvitationProjectComponent } from 'src/app/modules/project/shared/modal-invitation-project/modal-invitation-project.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

describe('ModalInvitationProjectComponent', () => {
  let component: ModalInvitationProjectComponent;
  let fixture: ComponentFixture<ModalInvitationProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalInvitationProjectComponent],
      providers: [MessageService],
      imports: [PrimengModule, HttpClientTestingModule,BrowserAnimationsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInvitationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
