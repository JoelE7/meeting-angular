import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from '../../../../../modules/user/pages/create-user/create-user.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListUserComponent } from 'src/app/modules/user/pages/list-user/list-user.component';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { FormUserComponent } from 'src/app/modules/user/components/form-user/form-user.component';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserComponent,FormUserComponent ],
      providers : [MessageService,AuthService],
      imports : [PrimengModule,HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'user/list-user', component: ListUserComponent },
      ])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
