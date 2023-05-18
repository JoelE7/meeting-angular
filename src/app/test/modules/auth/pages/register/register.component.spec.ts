import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageService } from 'primeng/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { RegisterComponent } from 'src/app/modules/auth/pages/register/register.component';
import { LoginComponent } from 'src/app/modules/auth/pages/login/login.component';
import { mockAuthService } from 'src/app/test/__mocks__/services/auth/auth.service.mock';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let html: HTMLElement;
  let htmlDebug: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent,LoginComponent],
      providers: [
        MessageService,
        { provide: AuthService, useValue: mockAuthService },
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{ path: 'login', component: LoginComponent }]),
        PrimengModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    html = fixture.nativeElement;
    htmlDebug = fixture.debugElement.nativeElement;
   

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Que verifique que se completen los campos obligatorios para registrarse y que se registre', () => {
    let form = component.form;

    let name = component.form.get('name');
    let email = component.form.get('email');
    let pass = component.form.get('pass');
    let role = component.form.get('role');

    expect(form.invalid).toBeTruthy();

    name.setValue('Prueba nombre');
    email.setValue('prueba@gmail.com');
    pass.setValue('1234');
    role.setValue('COMPANY');

    expect(form.invalid).toBeFalsy();

    const registerUser = spyOn(mockAuthService, 'registerUser');
    registerUser.and.returnValue(of<any>({}));
    component.register();
    expect(mockAuthService.registerUser).toHaveBeenCalled();
  });
});
