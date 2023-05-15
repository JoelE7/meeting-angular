import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageService } from 'primeng/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RegisterComponent } from 'src/app/auth/pages/register/register.component';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent desde el html', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let html:HTMLElement;
  let htmlDebug:HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [MessageService,AuthService],
      imports : [HttpClientTestingModule,RouterTestingModule,PrimengModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    html = fixture.nativeElement;
    htmlDebug = fixture.debugElement.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // it('Que verifique que se completen los campos obligatorios para registrarse',()=>{
  //   fixture.detectChanges();
  //   let form = component.form

  //   let name:HTMLInputElement = html.querySelector('#name')
  //   let email:HTMLInputElement = html.querySelector('#email')
  //   let password:HTMLInputElement = html.querySelector('#password')
  //   let role: HTMLSelectElement = fixture.debugElement.nativeElement.querySelector('#role');
  //   let submitButton:HTMLElement = htmlDebug.querySelector('#submit')

  //   let spy = spyOn(component, 'register')

  //   console.log(submitButton);

  //   expect(
  //     submitButton.attributes.getNamedItem('ng-reflect-disabled')?.value
  //   ).toEqual('true');

  //   name.value = "nombre prueba"
  //   name.dispatchEvent(new Event('input'))

  //   email.value = "email@prueba.com"
  //   email.dispatchEvent(new Event('input'))

  //   password.value = "1234"
  //   password.dispatchEvent(new Event('input'))

  //   role.value = "OTHER"

  //   role.dispatchEvent(new Event('change'));

  //   fixture.detectChanges();

  //   expect(
  //     submitButton.attributes.getNamedItem('ng-reflect-disabled')?.value
  //   ).toEqual('false');

  //   submitButton.click();

  //   component.register();

  //   fixture.detectChanges();

  //   console.log(form);


  //   expect(spy).toHaveBeenCalled();


  // })

});
