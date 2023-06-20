import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-radar',
  templateUrl: './char-radar.component.html',
  styleUrls: ['./char-radar.component.css'],
})
export class CharRadarComponent implements OnInit {
  @Input()
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary,
          },
          pointLabels: {
            color: textColorSecondary,
          },
        },
      },
    };
  }
}
