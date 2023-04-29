import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SeeMyProfileComponent } from './pages/see-my-profile/see-my-profile.component';


@NgModule({
  declarations: [SeeMyProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports : [
    SeeMyProfileComponent
  ]
})
export class UserModule { }
