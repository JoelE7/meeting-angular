import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageService } from 'primeng/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent desde el html', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [MessageService, AuthService],
      imports: [HttpClientTestingModule, PrimengModule, RouterTestingModule,ReactiveFormsModule,FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Verificar que complete los campos obligatorios', () => {
    const html: HTMLElement = fixture.nativeElement;
    
    let email: HTMLInputElement = html.querySelector('#email');
    let pass: HTMLInputElement = html.querySelector('#password');
    let submitButton: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#submit');

    let spy = spyOn(component, 'login')

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

    component.login()

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});

describe('LoginComponent desde el ts', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [MessageService, AuthService],
      imports: [HttpClientTestingModule, PrimengModule, RouterTestingModule],
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
  });
});
