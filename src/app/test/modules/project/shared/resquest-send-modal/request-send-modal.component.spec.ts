import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { RequestSendModalComponent } from 'src/app/modules/project/shared/request-send-modal/request-send-modal.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('RequestSendModalComponent', () => {
  let component: RequestSendModalComponent;
  let fixture: ComponentFixture<RequestSendModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestSendModalComponent ],
      providers : [MessageService],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestSendModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
