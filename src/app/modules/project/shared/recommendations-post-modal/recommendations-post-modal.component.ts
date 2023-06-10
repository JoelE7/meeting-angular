import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Post } from 'src/app/shared/models/post/post.class';

@Component({
  selector: 'app-recommendations-post-modal',
  templateUrl: './recommendations-post-modal.component.html',
  styleUrls: ['./recommendations-post-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecommendationsPostModalComponent {

  answer: Boolean = false;

  hiddenPopUpQuestion = false;

  @Input()
  posts:Post[] = []

}
