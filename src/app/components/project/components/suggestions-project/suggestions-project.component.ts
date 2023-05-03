import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-suggestions-project',
  templateUrl: './suggestions-project.component.html',
  styleUrls: ['./suggestions-project.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class SuggestionsProjectComponent {
  suggestions = [{
    name:"ABM Despegar",
    typeofProject:"Web",
    languajes:"Javascript",
    complexity:"Junior",
    technologies:"Angular"
  },
  {
    name:"Clon Meli",
    typeofProject:"Mobile",
    languajes:"Node.js",
    complexity:"Senior",
    technologies:""

  },{
    name:"Menu Facil",
    typeofProject:"Web",
    languajes:"Javascript",
    complexity:"Senior",
    technologies:"Angular"
  },{
    name:"Netflix 2",
    typeofProject:"Web",
    languajes:"Javascript",
    complexity:"Junior",
    technologies:"React"
  }]

  responsiveOptions = [ { breakpoint: '1199px', numVisible: 1, numScroll: 1 }, { breakpoint: '991px', numVisible: 2, numScroll: 1 }, { breakpoint: '767px', numVisible: 1, numScroll: 1 } ];
}
