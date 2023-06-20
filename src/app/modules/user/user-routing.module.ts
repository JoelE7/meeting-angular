import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeMyProfileComponent } from './pages/see-my-profile/see-my-profile.component';
import {ListUserComponent} from "./pages/list-user/list-user.component";
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'see-my-profile/:id', component: SeeMyProfileComponent },
      { path: 'see-profile/:id', component: SeeMyProfileComponent },
      { path: 'create', component: CreateUserComponent },
      { path: 'update/:id', component: UpdateUserComponent },
      { path: 'list-users', component: ListUserComponent },
      { path: 'search-users', component: SearchUserComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
