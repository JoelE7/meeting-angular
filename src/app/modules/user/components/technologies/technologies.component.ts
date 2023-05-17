import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  technologies = [{
    name:"PHP",
    level:"Medio",
    icon: "fab fa-php"
  },
    {
      name:"Larevel",
      level:"Medio",
      icon: "fab fa-laravel"
    },{
      name:"React",
      level:"Básico",
      icon: "fab fa-react"
    },{
      name:"Angular",
      level:"Básico",
      icon: "fab fa-angular"
    }]
}
