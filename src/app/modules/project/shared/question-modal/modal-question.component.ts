import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-modal-question',
  templateUrl: './modal-question.component.html',
  styleUrls: ['./modal-question.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalQuestionComponent {

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
