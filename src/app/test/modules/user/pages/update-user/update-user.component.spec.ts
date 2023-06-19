import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/api/services/user/user.service';
import { FormUserComponent } from 'src/app/modules/user/components/form-user/form-user.component';
import { SeeMyProfileComponent } from 'src/app/modules/user/pages/see-my-profile/see-my-profile.component';
import { UpdateUserComponent } from 'src/app/modules/user/pages/update-user/update-user.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserComponent ,FormUserComponent],
      providers : [UserService,MessageService],
      imports : [PrimengModule,HttpClientTestingModule,   RouterTestingModule.withRoutes([
        { path: 'user/see-my-profile/:id', component: SeeMyProfileComponent },
      ])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
