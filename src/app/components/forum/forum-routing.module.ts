import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './pages/forum.component';


const routes: Routes = [
  {
    path: '',
     children: [{ path: '', component: ForumComponent },
    //  { path: 'createPost', component:ForumComponent  },
              // { path: 'update', component: UpdateMvpComponent },
              // { path: 'details-mvp/1', component: DetailMvpComponent },
 
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
