import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from './shared/primeng/primeng.module';
import { ProjectModule } from './components/project/project.module';
import { UserModule } from './components/user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { MessageService, SharedModule } from 'primeng/api';
import { StartModule } from './public/start.module';
import { PostModule } from './components/post/post.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    SharedModule,
    UserModule,
    StartModule,
    AuthModule,
    ReactiveFormsModule,
    ProjectModule,
    PostModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
