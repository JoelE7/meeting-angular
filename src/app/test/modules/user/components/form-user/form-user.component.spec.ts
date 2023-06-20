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
});
