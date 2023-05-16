import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeMyProfileComponent } from './pages/see-my-profile/see-my-profile.component';
import {ListUserComponent} from "./pages/list-user/list-user.component";
import { SearchUserComponent } from './pages/search-user/search-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'see-my-profile', component: SeeMyProfileComponent },
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
