import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserComponent } from '../../../../../modules/user/components/form-user/form-user.component';
import { DataService } from 'src/app/api/services/data/data.service';
import { MessageService } from 'primeng/api';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormUserComponent', () => {
  let component: FormUserComponent;
  let fixture: ComponentFixture<FormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserComponent ],
      providers : [DataService,MessageService],
      imports : [PrimengModule,ReactiveFormsModule,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('que se valide el formulario correctamente',()=>{
    let form = component.form
    expect(form.invalid).toBeTruthy()
    form.get('name').setValue("prueba proyecto")
    form.get('profile').setValue("FullStack")
    form.get('github').setValue("userGithub")
    form.get('gitlab').setValue("userGitlab")
    form.get('mailEnabled').setValue(true)
    form.get('technologies').setValue(["Angular","Node.js"])
    expect(form.invalid).toBeFalsy()
  })
});
