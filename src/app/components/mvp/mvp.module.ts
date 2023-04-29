import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpRoutingModule } from './mvp-routing.module';
import { FormMvpComponent } from './components/form-mvp/form-mvp.component';
import { CreateMvpComponent } from './pages/create-mvp/create-mvp.component';
import { UpdateMvpComponent } from './pages/update-mvp/update-mvp.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FormMvpComponent,
    CreateMvpComponent,
    UpdateMvpComponent
  ],
  imports: [
    CommonModule,
    MvpRoutingModule,
    ReactiveFormsModule
  ]
})
export class MvpModule { }
