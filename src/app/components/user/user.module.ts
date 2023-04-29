import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { UserRoutingModule } from './user-routing.module';
import { SeeMyProfileComponent } from './pages/see-my-profile/see-my-profile.component';


@NgModule({
  declarations: [SeeMyProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimengModule
  ],
  exports : [
    SeeMyProfileComponent
  ]
})
export class UserModule { }
