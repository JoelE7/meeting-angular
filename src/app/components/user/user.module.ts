import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { UserRoutingModule } from './user-routing.module';
import { SeeMyProfileComponent } from './pages/see-my-profile/see-my-profile.component';
import {ProjectModule} from "../project/project.module";
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from './components/chart-doughnut/chart-doughnut.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';


@NgModule({
  declarations: [SeeMyProfileComponent, TechnologiesComponent, ListUserComponent, ChartBarComponent, ChartDoughnutComponent, ChartLineComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimengModule,
    ProjectModule
  ],
  exports : [
    SeeMyProfileComponent, ChartBarComponent, ChartDoughnutComponent, ChartLineComponent
  ]
})
export class UserModule { }
