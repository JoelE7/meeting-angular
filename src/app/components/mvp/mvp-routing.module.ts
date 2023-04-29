import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMvpComponent } from './pages/create-mvp/create-mvp.component';
import { UpdateMvpComponent } from './pages/update-mvp/update-mvp.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'create', component: CreateMvpComponent }, 
              { path: 'update', component: UpdateMvpComponent },
              ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpRoutingModule { }
