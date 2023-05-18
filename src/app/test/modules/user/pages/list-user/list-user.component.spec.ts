import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ListUserComponent } from 'src/app/modules/user/pages/list-user/list-user.component';
import { UserService } from 'src/app/api/services/user/user.service';
import { TableUserComponent } from 'src/app/modules/user/components/table-user/table-user.component';
import { HttpClientModule } from '@angular/common/http';

describe('Listar usuarios', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserComponent,TableUserComponent ],
      providers : [UserService],
      imports : [PrimengModule,RouterTestingModule,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
