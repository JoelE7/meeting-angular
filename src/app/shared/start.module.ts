import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeng/primeng.module';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [MenuComponent, FooterComponent, MainComponent, HomeComponent, BannerComponent],
  imports: [CommonModule, PrimengModule],
  exports: [MenuComponent, FooterComponent, MainComponent, HomeComponent, BannerComponent],
})
export class StartModule {}
