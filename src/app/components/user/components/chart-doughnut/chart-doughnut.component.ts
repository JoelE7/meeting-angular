import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.css']
})
export class ChartDoughnutComponent implements OnInit {
    data: any;

    options: any;
  
    ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
  
  
      this.data = {
        labels: ['Contribución', 'Popularidad del proyecto', 'Uso de ramas'],
        datasets: [
          {
            data: [200, 250, 100],
            backgroundColor: [
              documentStyle.getPropertyValue('--purple-300'),
              documentStyle.getPropertyValue('--purple-600'),
              documentStyle.getPropertyValue('--purple-900'),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--purple-200'),
              documentStyle.getPropertyValue('--purple-500'),
              documentStyle.getPropertyValue('--purple-800'),
            ],
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
  }
  