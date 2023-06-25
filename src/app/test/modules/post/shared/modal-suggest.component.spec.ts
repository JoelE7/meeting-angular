import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalSuggestComponent } from '../../../../modules/post/shared/modal-suggest/modal-suggest.component';
import { MessageService } from 'primeng/api';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from 'src/app/api/services/user/user.service';
import { mockGetAllUser, mockUserService } from 'src/app/test/__mocks__/services/user/user.service.mock';
import { of } from 'rxjs';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';


describe('ModalSuggestComponent', () => {
  let component: ModalSuggestComponent;
  let fixture: ComponentFixture<ModalSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSuggestComponent ],
      providers: [MessageService,{provide : UserService, useValue : mockUserService}],
      imports: [PrimengModule,HttpClientTestingModule,ReactiveFormsModule,BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSuggestComponent);
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
