import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ListProjectComponent } from 'src/app/components/project/pages/list-project/list-project.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'create', component: CreateProjectComponent }, 
              { path: 'list-project', component: ListProjectComponent },
              ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
