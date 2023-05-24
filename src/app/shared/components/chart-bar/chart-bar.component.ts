import { Component, Input, OnInit } from '@angular/core';
import { MetricCommit } from 'src/app/modules/user/interfaces/metricCommit.interface';
import { MetricProject } from '../../../modules/project/interfaces/metricProject.interface';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css'],
})
export class ChartBarComponent implements OnInit {
  @Input()
  metricCommit: any[];

  data: any;

  options: any;

  nameRepositorys: string[] = [];
  quantityCommits: number[] = [];

  ngOnInit() {
    if(this.metricCommit){
      this.metricCommit[0].commits.forEach((commit) => {
        this.nameRepositorys.push(commit.nameRepository)
        this.quantityCommits.push(commit.quantityCommits)
      });
    }

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: this.nameRepositorys,
      datasets: [
        {
          label: 'Cantidad de commits',
          backgroundColor: documentStyle.getPropertyValue('--purple-900'),
          borderColor: documentStyle.getPropertyValue('--purple-900'),
          data: this.quantityCommits,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
