import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormProjectComponent } from 'src/app/components/project/components/form-project/form-project.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('FormProjectComponent', () => {
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
