import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import {ButtonModule} from "primeng/button";
import { ForumRoutingModule } from './forum-routing.module';
import { StartModule } from 'src/app/public/start.module';
import { ForumComponent } from './pages/forum.component';

@NgModule({
  declarations: [
    ForumComponent,

    // FormMvpComponent,
    // CreateMvpComponent,
    // UpdateMvpComponent,
    // DetailMvpComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ButtonModule,
    ForumRoutingModule,
    StartModule,


   
  ]
})

export class ForumModule { }