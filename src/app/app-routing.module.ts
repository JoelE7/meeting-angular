import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LandingComponent } from './public/landing/landing.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'landing',
    pathMatch: 'full',
    component: LandingComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./modules//project/project.module').then(
        (m) => m.ProjectModule
      ),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./modules//post/post.module').then(
        (m) => m.PostModule
      ),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
