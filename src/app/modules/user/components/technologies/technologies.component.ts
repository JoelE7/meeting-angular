import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class TechnologiesComponent {
  @Input()
  technologies:string[] = []
}