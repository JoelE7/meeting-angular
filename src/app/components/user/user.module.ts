import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { UserRoutingModule } from './user-routing.module';
import { SeeMyProfileComponent } from './pages/see-my-profile/see-my-profile.component';
import {ProjectModule} from "../project/project.module";
import { TechnologiesComponent } from './components/technologies/technologies.component';


@NgModule({
  declarations: [SeeMyProfileComponent, TechnologiesComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimengModule,
    ProjectModule
  ],
  exports : [
    SeeMyProfileComponent
  ]
})
export class UserModule { }
