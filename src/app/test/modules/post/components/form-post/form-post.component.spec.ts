import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostComponent } from '../../../../../modules/post/components/form-post/form-post.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/api/services/data/data.service';
import { mockDataService, mockTechnologies } from 'src/app/test/__mocks__/services/data/data.service.mock';
import { of } from 'rxjs';

describe('FormPostComponent', () => {
  let component: FormPostComponent;
  let fixture: ComponentFixture<FormPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPostComponent ],
      providers:[MessageService,{ provide: DataService, useValue: mockDataService }],
      imports:[ PrimengModule,HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const getTechnologies = spyOn(mockDataService, 'getTechnologies');
    getTechnologies.and.returnValue(of<any[]>(mockTechnologies));

  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('que se valide el formulario : form.invalid',()=>{
    let form = component.form;
    expect(form.invalid).toBeTruthy()
    form.get('title').setValue("titulo")
    form.get('body').setValue("10 caracteres minimo")
    form.get('project').setValue("2421423as")
    form.get('technologies').setValue(["Angular"])
    expect(form.invalid).toBeFalsy()
  })
});
