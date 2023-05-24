import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MetricLanguage } from 'src/app/modules/user/interfaces/metricLanguage.interface';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ChartDoughnutComponent implements OnInit {
  @Input()
  metrics: MetricLanguage[];

  languages:string[] = [];

  quantityLanguage:number[] = []

  data: any;

  options: any;

  ngOnInit() {
    this.getMetrics();
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: this.languages,
      datasets: [
        {
          data: this.quantityLanguage,
        },
      ],
    };

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

  async getMetrics(){
    await new Promise((resolve,reject)=>{
      this.metrics.forEach((lang:MetricLanguage)=>{
        this.languages.push(lang.technology)
        this.quantityLanguage.push(lang.quantity)
      })
    })
  }
}
