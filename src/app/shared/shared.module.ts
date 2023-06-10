import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from './components/chart-doughnut/chart-doughnut.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import { PrimengModule } from './primeng/primeng.module';
import { FiltersComponent } from './filters/filters.component';
import { ModalContactComponent } from './components/modal-contact/modal-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ChartBarComponent,
    ChartDoughnutComponent,
    ChartLineComponent,
    FiltersComponent,
    ModalContactComponent,
   
  ],
    imports: [CommonModule, PrimengModule,BrowserAnimationsModule],
  exports: [
    ChartBarComponent,
    ChartDoughnutComponent,
    ChartLineComponent,
    FiltersComponent,
    ModalContactComponent,
  ],
})
export class SharedModule {}
