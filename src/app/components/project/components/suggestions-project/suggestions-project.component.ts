import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-suggestions-project',
  templateUrl: './suggestions-project.component.html',
  styleUrls: ['./suggestions-project.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class SuggestionsProjectComponent {
  suggestions = [{
    name:"Proyecto 1 ",
    typeofProject:"Fronted",
    languajes:"Javascript",
    complexity:"Junior",
    technologies:"Angular"
  },
  {
    name:"Proyecto 2",
    typeofProject:"Fronted",
    languajes:"Angular",
    complexity:"Junior",
    technologies:""
  },{
    name:"Proyecto 3",
    typeofProject:"Backend",
    languajes:"Node.js",
    complexity:"Senior",
    technologies:""
  },{
    name:"Proyecto 4",
    typeofProject:"Fronted",
    languajes:"Javascript",
    complexity:"Junior",
    technologies:"React"
  }]

  responsiveOptions = [ { breakpoint: '1199px', numVisible: 1, numScroll: 1 }, { breakpoint: '991px', numVisible: 2, numScroll: 1 }, { breakpoint: '767px', numVisible: 1, numScroll: 1 } ];
}
