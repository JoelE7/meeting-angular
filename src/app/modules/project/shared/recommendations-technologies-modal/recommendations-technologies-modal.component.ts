import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
@Component({
  selector: 'app-recommendations-technologies-modal',
  templateUrl: './recommendations-technologies-modal.component.html',
  styleUrls: ['./recommendations-technologies-modal.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class RecommendationsTechnologiesModalComponent {


  answer: Boolean = false;

  hiddenPopUpQuestion = false;

  @Output()
  eventEmitterAnswer: EventEmitter<Boolean> = new EventEmitter();

  @Output()
  eventEmitterHiddenPopUpQuestion: EventEmitter<Boolean> = new EventEmitter();

  answerEmit(answer: Boolean) {
    this.answer = answer;
    this.eventEmitterHiddenPopUpQuestion.emit(this.hiddenPopUpQuestion);
    this.eventEmitterAnswer.emit(this.answer);
  }

}
