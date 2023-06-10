import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalContactComponent } from 'src/app/shared/components/modal-contact/modal-contact.component';

describe('ModalContactComponent', () => {
  let component: ModalContactComponent;
  let fixture: ComponentFixture<ModalContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalContactComponent],
      providers: [MessageService],
      imports: [PrimengModule, HttpClientTestingModule,BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
