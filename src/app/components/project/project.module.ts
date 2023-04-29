import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { FormProjectComponent } from './components/form-project/form-project.component';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

@NgModule({
  declarations: [
    CreateProjectComponent,
    ListProjectComponent,
    CardProjectComponent,
    FormProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    PrimengModule,
  ],
  exports:[
    CreateProjectComponent,
    FormProjectComponent,
    ListProjectComponent,
    CardProjectComponent,

  ]
})
export class ProjectModule { }
