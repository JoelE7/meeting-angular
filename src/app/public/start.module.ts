import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [MenuComponent, FooterComponent, MainComponent, HomeComponent, BannerComponent,LandingComponent],
  imports: [CommonModule, PrimengModule],
  exports: [MenuComponent, FooterComponent, MainComponent, HomeComponent, BannerComponent,LandingComponent],
})
export class StartModule {}
