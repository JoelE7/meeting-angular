import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Project } from 'src/app/shared/models/project/project.class';

@Component({
  selector: 'app-recommendations-project-modal',
  templateUrl: './recommendations-project-modal.component.html',
  styleUrls: ['./recommendations-project-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecommendationsProjectModalComponent {

  answer: Boolean = false;

  hiddenPopUpQuestion = false;

  @Input()
  projects:Project[] = []

}
