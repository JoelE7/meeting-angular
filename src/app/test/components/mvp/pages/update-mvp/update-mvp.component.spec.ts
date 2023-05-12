import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMvpComponent } from '../../../../../components/mvp/pages/update-mvp/update-mvp.component';
import { FormMvpComponent } from 'src/app/components/mvp/components/form-mvp/form-mvp.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateMvpComponent', () => {
  let component: UpdateMvpComponent;
  let fixture: ComponentFixture<UpdateMvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMvpComponent,FormMvpComponent ],
      providers : [],
      imports : [PrimengModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
