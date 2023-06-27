import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from '../../../../../modules/user/pages/create-user/create-user.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListUserComponent } from 'src/app/modules/user/pages/list-user/list-user.component';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { FormUserComponent } from 'src/app/modules/user/components/form-user/form-user.component';
import { mockAuthService } from 'src/app/test/__mocks__/services/auth/auth.service.mock';
import { User } from 'src/app/shared/models/user/user.class';
import { of, tap } from 'rxjs';
import { Router } from '@angular/router';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserComponent,FormUserComponent ],
      providers : [MessageService,{provide : AuthService, useValue : mockAuthService}],
      imports : [PrimengModule,HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'user/list-user', component: ListUserComponent },
      ])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('al crear un usuario que se llame al método del servicio : registerUser y que este rediriga a /user/list-users', () => {
    const registerUser = spyOn(mockAuthService, 'registerUser');
    const navigateSpy = spyOn(router, 'navigate');

    registerUser.and.returnValue(of<any>({}));
    component.createUser(new User());
    expect(mockAuthService.registerUser).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/user/list-users']);
  });
  
  xit('al crear mal un usuario que se llame al método del servicio : registerUser y que esté no rediriga', () => {
    const registerUser = spyOn(mockAuthService, 'registerUser');
    const navigateSpy = spyOn(router, 'navigate');

    registerUser.and.returnValue(
      of({}).pipe(
        tap(() => {
          throw { status: 500 };
        })
      )
    );

    component.createUser(new User());
    expect(mockAuthService.registerUser).toHaveBeenCalled();
    expect(navigateSpy).not.toHaveBeenCalledWith(['/user/list-users']);
  });

});
