import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostComponent } from '../../../../../modules/post/components/form-post/form-post.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FormPostComponent', () => {
  let component: FormPostComponent;
  let fixture: ComponentFixture<FormPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPostComponent ],
      providers:[],
      imports:[ PrimengModule,HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
