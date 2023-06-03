import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormProjectComponent } from 'src/app/modules/project/components/form-project/form-project.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { userMock } from 'src/app/test/__mocks__/models/users/users.mock.model';


describe('FormProjectComponentConLogin', () => {
  let component: FormProjectComponent;
  let fixture: ComponentFixture<FormProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProjectComponent ],
      providers : [],
      imports : [PrimengModule,RouterTestingModule]
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
      providers : [],
      imports : [PrimengModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
