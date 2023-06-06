import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SeeMyProfileComponent } from 'src/app/modules/user/pages/see-my-profile/see-my-profile.component';
import { TechnologiesComponent } from 'src/app/modules/user/components/technologies/technologies.component';
import { CardProjectComponent } from 'src/app/modules/project/components/card-project/card-project.component';
import { MessageService, SharedModule } from 'primeng/api';
import { ChartBarComponent } from 'src/app/shared/components/chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from 'src/app/shared/components/chart-doughnut/chart-doughnut.component';
import { ChartLineComponent } from 'src/app/shared/components/chart-line/chart-line.component';
import { HttpClientModule } from '@angular/common/http';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';

describe('See my profileConLogin', () => {
  let component: SeeMyProfileComponent;
  let fixture: ComponentFixture<SeeMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SeeMyProfileComponent,
        TechnologiesComponent,
        CardProjectComponent,
        ChartBarComponent,
        ChartDoughnutComponent,
        ChartLineComponent
      ],
      providers:[MessageService],
      imports: [PrimengModule, RouterTestingModule, SharedModule,HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    localStorage.setItem('user',JSON.stringify(userMock))

  });

  afterEach(() => {
    localStorage.removeItem("user");
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('See my profileSinLogin', () => {
  let component: SeeMyProfileComponent;
  let fixture: ComponentFixture<SeeMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SeeMyProfileComponent,
        TechnologiesComponent,
        CardProjectComponent,
        ChartBarComponent,
        ChartDoughnutComponent,
        ChartLineComponent
      ],
      providers:[MessageService],
      imports: [PrimengModule, RouterTestingModule, SharedModule,HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});