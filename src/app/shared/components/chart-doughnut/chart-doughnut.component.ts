import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MetricLanguage } from 'src/app/modules/user/interfaces/metricLanguage.interface';
import { ChartDoughnutData } from '../../models/model-metric/DoughnutMetric.interface';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ChartDoughnutComponent implements OnInit {


  @Input()
  data:any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }
}
