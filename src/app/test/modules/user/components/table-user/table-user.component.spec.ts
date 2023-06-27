import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableUserComponent } from 'src/app/modules/user/components/table-user/table-user.component';
import { ModalContactComponent } from 'src/app/shared/components/modal-contact/modal-contact.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { UserService } from 'src/app/api/services/user/user.service';
import { MessageService } from 'primeng/api';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { mockUserService } from 'src/app/test/__mocks__/services/user/user.service.mock';
import { of } from 'rxjs';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { User } from 'src/app/shared/models/user/user.class';

describe('TableUserComponent', () => {
  let component: TableUserComponent;
  let fixture: ComponentFixture<TableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableUserComponent, ModalContactComponent],
      providers: [{provide : UserService, useValue : mockUserService}, MessageService],
      imports: [PrimengModule, RouterTestingModule, HttpClientTestingModule,SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit("que se envíe el mail de contacto al usuario creador del post y se cierre el modal : sendMailContact()", () => {
    const sendMailContact = spyOn(mockUserService, 'sendMailContact');
    sendMailContact.and.returnValue(of<any>({}));
    component.showModalContact(new User());
    component.sendMailContact({email : "", message : "", user : userMock})
    expect(mockUserService.sendMailContact).toHaveBeenCalled();
    expect(component.visibleModalContact).toBeFalsy();
  });
});
