import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { UserRoutingModule } from './user-routing.module';
import { SeeMyProfileComponent } from './pages/see-my-profile/see-my-profile.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { ProjectModule } from '../project/project.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableUserComponent } from './components/table-user/table-user.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { ModalInvitationComponent } from './shared/modal-invitation/modal-invitation.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { FormUserComponent } from './components/form-user/form-user.component';

@NgModule({
  declarations: [
    SeeMyProfileComponent,
    TechnologiesComponent,
    ListUserComponent,
    TableUserComponent,
    SearchUserComponent,
    ModalInvitationComponent,
    UpdateUserComponent,
    CreateUserComponent,
    FormUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    PrimengModule,
    ProjectModule,
  ],
  exports: [
    SeeMyProfileComponent,
    TableUserComponent,
    SearchUserComponent,
    ModalInvitationComponent
  ],
})
export class UserModule {}
