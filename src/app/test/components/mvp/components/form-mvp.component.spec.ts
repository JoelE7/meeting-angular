import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormMvpComponent } from '../../../../components/mvp/components/form-mvp/form-mvp.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';


describe('CreateMvpComponent', () => {
  let component: FormMvpComponent;
  let fixture: ComponentFixture<FormMvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMvpComponent ],
      imports : [PrimengModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
