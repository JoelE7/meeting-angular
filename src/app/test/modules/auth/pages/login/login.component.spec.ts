import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageService } from 'primeng/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from 'src/app/public/home/home.component';
import { LoginComponent } from 'src/app/modules/auth/pages/login/login.component';
import { mockAuthService } from 'src/app/test/__mocks__/services/auth/auth.service.mock';
import { userMock } from 'src/app/test/__mocks__/models/users/users.mock.model';

describe('LoginComponent desde el html', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        MessageService,
        { provide: AuthService, useValue: mockAuthService },
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomeComponent },
        ]),
        PrimengModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verificar que complete los campos obligatorios', () => {
    const loginUser = spyOn(mockAuthService, 'loginUser');
    loginUser.and.returnValue(of<any>({}));

    const html: HTMLElement = fixture.nativeElement;

    let email: HTMLInputElement = html.querySelector('#email');
    let pass: HTMLInputElement = html.querySelector('#password');
    let submitButton: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#submit');

    expect(
      submitButton.attributes.getNamedItem('ng-reflect-disabled')?.value
    ).toEqual('true');

    email.value = 'prueba@gmail.com';
    email.dispatchEvent(new Event('input'));

    pass.value = '1234';
    pass.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(
      submitButton.attributes.getNamedItem('ng-reflect-disabled')?.value
    ).toEqual('false');

    submitButton.click();

    component.login();

    fixture.detectChanges();

    expect(mockAuthService.loginUser).toHaveBeenCalled();
  });
});

describe('LoginComponent desde el ts', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        MessageService,
        { provide: AuthService, useValue: mockAuthService },
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'home', component: HomeComponent },
        ]),
        PrimengModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Verificar que complete los campos obligatorios', () => {
    let form = component.form;

    let email = component.form.get('email');
    let pass = component.form.get('pass');

    expect(form.invalid).toBeTruthy();

    email.setValue('prueba@gmail.com');
    pass.setValue('1234');

    expect(form.invalid).toBeFalsy();


    const loginUser = spyOn(mockAuthService, 'loginUser');

    loginUser.and.returnValue(of<any>({token : "algo", user: userMock}));    component.login();
    expect(mockAuthService.loginUser).toHaveBeenCalled();
  });
});
