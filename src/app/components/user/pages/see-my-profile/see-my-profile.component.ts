import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-see-my-profile',
  templateUrl: './see-my-profile.component.html',
  styleUrls: ['./see-my-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeeMyProfileComponent {
  metrics = {
    "contributions": 150,
    "contributionFrequency": 7,
    "codeComments": true,
    "qualityToolsUsed": true,
    "branchUsage": 5,
    "responseTime": 12,
    "popularity": 2000
  };
}
