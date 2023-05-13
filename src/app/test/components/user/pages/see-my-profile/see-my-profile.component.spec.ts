import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SeeMyProfileComponent } from 'src/app/components/user/pages/see-my-profile/see-my-profile.component';
import { TechnologiesComponent } from 'src/app/components/user/components/technologies/technologies.component';
import { CardProjectComponent } from 'src/app/components/project/components/card-project/card-project.component';
import { SharedModule } from 'primeng/api';
import { ChartBarComponent } from 'src/app/shared/components/chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from 'src/app/shared/components/chart-doughnut/chart-doughnut.component';
import { ChartLineComponent } from 'src/app/shared/components/chart-line/chart-line.component';
import { HttpClientModule } from '@angular/common/http';

describe('See my profile', () => {
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
