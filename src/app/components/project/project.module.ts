import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { FormProjectComponent } from './components/form-project/form-project.component';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { SuggestionsProjectComponent } from './components/suggestions-project/suggestions-project.component';
import { DetailsProjectComponent } from './pages/details-project/details-project.component';
import { UpdateProjectComponent } from './pages/update-project/update-project.component';
import { RequestSendModalComponent } from './shared/request-send-modal/request-send-modal.component';
import { RequestAcceptModalComponent } from './shared/request-accept-modal/request-accept-modal.component';
import {StartModule} from "../../shared/start.module";

@NgModule({
  declarations: [
    CreateProjectComponent,
    UpdateProjectComponent,
    ListProjectComponent,
    CardProjectComponent,
    FormProjectComponent,
    SuggestionsProjectComponent,
    DetailsProjectComponent,
    RequestSendModalComponent,
    RequestAcceptModalComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    PrimengModule,
    StartModule,
  ],
  exports:[
    CreateProjectComponent,
    UpdateProjectComponent,
    FormProjectComponent,
    ListProjectComponent,
    CardProjectComponent,
    DetailsProjectComponent,
    RequestSendModalComponent,
    RequestAcceptModalComponent,
  ]
})
export class ProjectModule { }
