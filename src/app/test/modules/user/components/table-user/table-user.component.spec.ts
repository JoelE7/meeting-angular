import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableUserComponent } from 'src/app/modules/user/components/table-user/table-user.component';
import { ModalContactComponent } from 'src/app/modules/user/shared/modal-contact/modal-contact.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { UserService } from 'src/app/api/services/user/user.service';
import { MessageService } from 'primeng/api';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TableUserComponent', () => {
  let component: TableUserComponent;
  let fixture: ComponentFixture<TableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableUserComponent,ModalContactComponent],
      providers:[UserService,MessageService],
      imports : [PrimengModule,RouterTestingModule,HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
