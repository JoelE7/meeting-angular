import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMvpComponent } from './pages/create-mvp/create-mvp.component';
import { UpdateMvpComponent } from './pages/update-mvp/update-mvp.component';
import {DetailMvpComponent} from "./pages/detail-mvp/detail-mvp.component";

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'create', component: CreateMvpComponent },
              { path: 'update', component: UpdateMvpComponent },
              { path: 'details-mvp/1', component: DetailMvpComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpRoutingModule { }
