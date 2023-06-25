import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { DataService } from 'src/app/api/services/data/data.service';
import { FormProjectComponent } from 'src/app/modules/project/components/form-project/form-project.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { mockDataService, mockTechnologies } from 'src/app/test/__mocks__/services/data/data.service.mock';


describe('FormProjectComponentConLogin', () => {
  let component: FormProjectComponent;
  let fixture: ComponentFixture<FormProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProjectComponent ],
      providers : [DataService,MessageService],
      imports : [PrimengModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    localStorage.setItem('user',JSON.stringify(userMock))

  });

  afterEach(() => {
    localStorage.removeItem("user");
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('FormProjectComponentSinLogin', () => {
  let component: FormProjectComponent;
  let fixture: ComponentFixture<FormProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProjectComponent ],
      providers : [{ provide: DataService, useValue: mockDataService },MessageService],
      imports : [PrimengModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const getTechnologies = spyOn(mockDataService, 'getTechnologies');
    getTechnologies.and.returnValue(of<any[]>(mockTechnologies));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('que se valide el formulario correctamente',()=>{
    let form = component.form
    expect(form.invalid).toBeTruthy()
    form.get('name').setValue("prueba proyecto")
    form.get('description').setValue("descripcion")
    form.get('startDate').setValue(new Date())
    form.get('endDate').setValue(new Date())
    form.get('typeProject').setValue("Web")
    form.get('complexity').setValue("Junior")
    form.get('amountParticipants').setValue(1)
    form.get('technologies').setValue(["Angular","Node.js"])
    expect(form.invalid).toBeFalsy()
  })
});
