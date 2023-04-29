import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  technologies = [{
    name:"PHP",
    level:"medio"
  },
    {
      name:"Larevel",
      level:"medio"
    },{
      name:"React",
      level:"basico"
    },{
      name:"Angular",
      level:"basico"
    }]
}
