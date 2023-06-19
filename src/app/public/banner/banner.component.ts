import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Project } from 'src/app/shared/models/project/project.class';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent {
  @Input()
  title: string = ' ';

  @Input()
  subtitle: string = '';

  @Input()
  short: boolean = false;

  @Input()
  roleUser: string = '';

  @Input()
  updateProject: boolean = false;

  @Input()
  project:Project;
}
