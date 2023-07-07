import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { HomeComponent } from 'src/app/public/home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ListProjectComponent } from 'src/app/modules/project/pages/list-project/list-project.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers : [MessageService],
      imports : [HttpClientModule,PrimengModule,RouterTestingModule.withRoutes([
        { path: 'project/list-project', component: ListProjectComponent },
      ])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
