import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { UserService } from 'src/app/api/services/user/user.service';
import { ModalInvitationProjectComponent } from 'src/app/modules/project/shared/modal-invitation-project/modal-invitation-project.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { mockGetAllUser, mockUserService } from 'src/app/test/__mocks__/services/user/user.service.mock';

describe('ModalInvitationProjectComponent', () => {
  let component: ModalInvitationProjectComponent;
  let fixture: ComponentFixture<ModalInvitationProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalInvitationProjectComponent],
      providers: [MessageService,{provide : UserService, useValue : mockUserService}],
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

  it('que traiga todos los usuarios receptores : getUsers()', () => {
    const getAllUser = spyOn(mockUserService,'getAllUser');
    getAllUser.and.returnValue(of(mockGetAllUser))
    component.ngOnInit();
    expect(mockUserService.getAllUser).toHaveBeenCalled();
  });

  it('que quite al usuario emisor de la lista de usuarios receptores: removeCurrentUserFilters()', () => {
    const getAllUser = spyOn(mockUserService,'getAllUser');
    getAllUser.and.returnValue(of(mockGetAllUser))
    component.userEmisor = userMock
    let userEmisor =  component.usersReceptor.find(user => user._id === component.userEmisor._id)
    expect(userEmisor).not.toBeUndefined()
    component.ngOnInit();
    userEmisor =  component.usersReceptor.find(user => user._id === component.userEmisor._id)
    expect(userEmisor).toBeUndefined()
    
  });
});
