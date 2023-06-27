import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { of, tap } from 'rxjs';
import { UserService } from 'src/app/api/services/user/user.service';
import { FormUserComponent } from 'src/app/modules/user/components/form-user/form-user.component';
import { SeeMyProfileComponent } from 'src/app/modules/user/pages/see-my-profile/see-my-profile.component';
import { UpdateUserComponent } from 'src/app/modules/user/pages/update-user/update-user.component';
import { User } from 'src/app/shared/models/user/user.class';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { userMock3 } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { mockUserService } from 'src/app/test/__mocks__/services/user/user.service.mock';


describe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;
  let router:Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserComponent ,FormUserComponent],
      providers : [{provide : UserService, useValue : mockUserService},MessageService],
      imports : [PrimengModule,HttpClientTestingModule,   RouterTestingModule.withRoutes([
        { path: 'user/see-my-profile/:id', component: SeeMyProfileComponent },
      ])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('al editar un usuario que se llame al método del servicio : updateUser y que este rediriga a /user/list-users', () => {
    component.searchUser = userMock3
    const updateUser = spyOn(mockUserService, 'updateUser');
    const navigateSpy = spyOn(router, 'navigate');

    updateUser.and.returnValue(of<any>({}));
    component.updateUser(new User());
    expect(mockUserService.updateUser).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/user/see-my-profile/' + userMock3._id]);

  });
  
  it('al editar mal un usuario que se llame al método del servicio : updateUser y que esté no rediriga', () => {
    component.searchUser = userMock3
    const updateUser = spyOn(mockUserService, 'updateUser');
    const navigateSpy = spyOn(router, 'navigate');

    updateUser.and.returnValue(
      of({}).pipe(
        tap(() => {
          throw { status: 500 };
        })
      )
    );

    component.updateUser(new User());
    expect(mockUserService.updateUser).toHaveBeenCalled();
    expect(navigateSpy).not.toHaveBeenCalledWith(['/user/see-my-profile/' + userMock3._id]);
  });
});
