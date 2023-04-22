import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeng/primeng.module';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [MenuComponent, FooterComponent, MainComponent, HomeComponent],
  imports: [CommonModule, PrimengModule],
  exports: [MenuComponent, FooterComponent, MainComponent, HomeComponent],
})
export class StartModule {}
