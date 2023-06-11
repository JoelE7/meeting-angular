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
import { StartModule } from 'src/app/public/start.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchProjectComponent } from './pages/search-project/search-project.component';
import { PostModule } from '../post/post.module';
import { ModalScoreComponent } from './shared/modal-score/modal-score.component';
import { SupportCollaborateComponent } from './components/support-collaborate/support-collaborate.component';
import { ProjectMemberComponent } from './components/project-member/project-member.component';
import { AdvancementMembersComponent } from './components/advancement-members/advancement-members.component';
import { ProjectProfilesComponent } from './components/project-profiles/project-profiles.component';
import { RecommendationsPostModalComponent } from './shared/recommendations-post-modal/recommendations-post-modal.component';
import { RecommendationsProjectModalComponent } from './shared/recommendations-project-modal/recommendations-project-modal.component';
import { RecommendationsTechnologiesModalComponent } from './shared/recommendations-technologies-modal/recommendations-technologies-modal.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalInvitationProjectComponent } from './shared/modal-invitation-project/modal-invitation-project.component';


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
    SearchProjectComponent,
    ModalScoreComponent,
    SupportCollaborateComponent,
    ProjectMemberComponent,
    AdvancementMembersComponent,
    ProjectProfilesComponent,
    RecommendationsPostModalComponent,
    RecommendationsProjectModalComponent,
    RecommendationsTechnologiesModalComponent,
    ModalInvitationProjectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule,
    PrimengModule,
    StartModule,
    SharedModule,
    PostModule,
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
    SearchProjectComponent,
    SupportCollaborateComponent,
    ProjectMemberComponent,
    AdvancementMembersComponent,
    ProjectProfilesComponent,
    RecommendationsPostModalComponent,
    RecommendationsProjectModalComponent,
    RecommendationsTechnologiesModalComponent,
  ]
})
export class ProjectModule { }
