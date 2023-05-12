import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { FormProjectComponent } from 'src/app/components/project/components/form-project/form-project.component';
import { CreateProjectComponent } from 'src/app/components/project/pages/create-project/create-project.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

describe('CreateProjectComponent', () => {
  let component: CreateProjectComponent;
  let fixture: ComponentFixture<CreateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectComponent,FormProjectComponent ],
      providers : [MessageService],
      imports : [PrimengModule,RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
