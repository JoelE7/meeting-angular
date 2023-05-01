import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  technologies = [{
    name:"PHP",
    level:"Medio"
  },
    {
      name:"Larevel",
      level:"Medio"
    },{
      name:"React",
      level:"Basico"
    },{
      name:"Angular",
      level:"Basico"
    }]
}
