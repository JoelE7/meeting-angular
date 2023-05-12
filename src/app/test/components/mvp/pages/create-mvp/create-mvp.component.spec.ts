import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMvpComponent } from '../../../../../components/mvp/pages/create-mvp/create-mvp.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { FormMvpComponent } from '../../../../../components/mvp/components/form-mvp/form-mvp.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateMvpComponent', () => {
  let component: CreateMvpComponent;
  let fixture: ComponentFixture<CreateMvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMvpComponent, FormMvpComponent ],
      imports : [PrimengModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
