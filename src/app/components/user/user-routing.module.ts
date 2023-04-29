import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeMyProfileComponent } from './pages/see-my-profile/see-my-profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'see-my-profile', component: SeeMyProfileComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
