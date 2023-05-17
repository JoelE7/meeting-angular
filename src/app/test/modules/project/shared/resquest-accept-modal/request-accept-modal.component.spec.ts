import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RequestAcceptModalComponent } from 'src/app/modules/project/shared/request-accept-modal/request-accept-modal.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('RequestAcceptModalComponent', () => {
  let component: RequestAcceptModalComponent;
  let fixture: ComponentFixture<RequestAcceptModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAcceptModalComponent ],
      providers : [ConfirmationService,MessageService],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAcceptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
