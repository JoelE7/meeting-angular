import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { PostRoutingModule } from './post-routing.module';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { DetailsPostComponent } from './pages/details-post/details-post.component';
import { ListPostComponent } from './pages/list-post/list-post.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { SuggestionsPostComponent } from './components/suggestions-post/suggestions-post.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { SharedModule } from 'src/app/shared/shared.module';

SharedModule
@NgModule({
  declarations: [
    CreatePostComponent,
    DetailsPostComponent,
    ListPostComponent,
    FormPostComponent,
    SuggestionsPostComponent,
    CardPostComponent,  
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    PrimengModule,
    SharedModule,
    ],
  exports:[
    CreatePostComponent,
    DetailsPostComponent,
    ListPostComponent,
    FormPostComponent,
    SuggestionsPostComponent,
    CardPostComponent
  ],
})

export class PostModule { }