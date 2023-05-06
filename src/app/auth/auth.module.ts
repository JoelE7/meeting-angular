import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
