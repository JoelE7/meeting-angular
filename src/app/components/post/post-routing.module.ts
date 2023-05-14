import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ListPostComponent } from './pages/list-post/list-post.component';
import { DetailsPostComponent } from './pages/details-post/details-post.component';

const routes: Routes = [
  {
    path: '',
     children: [
     { path: 'create', component: CreatePostComponent },
     { path: 'list-post', component: ListPostComponent },
     { path: 'details-post/:id', component: DetailsPostComponent },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
