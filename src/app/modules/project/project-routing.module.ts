import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ListProjectComponent } from 'src/app/modules/project/pages/list-project/list-project.component';
import { DetailsProjectComponent } from './pages/details-project/details-project.component';
import { UpdateProjectComponent } from './pages/update-project/update-project.component';
import { SearchProjectComponent } from './pages/search-project/search-project.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create', component: CreateProjectComponent },
      { path: 'update/:id', component: UpdateProjectComponent },
      { path: 'list-project', component: ListProjectComponent },
      { path: 'list-project-support', component: ListProjectComponent },
      { path: 'details-project/:id', component: DetailsProjectComponent },
      { path: 'search-project', component: SearchProjectComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
