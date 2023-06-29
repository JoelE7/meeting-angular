import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-modal-score',
  templateUrl: './modal-score.component.html',
  styleUrls: ['./modal-score.component.css'],
})
export class ModalScoreComponent implements OnInit {
  @Input()
  users: User[] = [];

  form: FormGroup;

  hiddenPopUpScore = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      starArray: new FormArray([]),
    });

    if (this.users) {
      for (let user of this.users) {
        this.starArray.push(
          new FormGroup({
            star: new FormControl('', [Validators.required]),
            userId: new FormControl(user._id, []),
            score: new FormControl(user.score, []),
          })
        );
      }
    }
  }

  get starArray() {
    return this.form.get('starArray') as FormArray;
  }

  addStarUserScore() {}

  @Output()
  eventEmitterHiddenPopUpScore: EventEmitter<Boolean> = new EventEmitter();

  @Output()
  eventEmitterScoreUsers: EventEmitter<any> = new EventEmitter();

  emitScore(answer: Boolean) {
    this.eventEmitterHiddenPopUpScore.emit(this.hiddenPopUpScore);
  }

  hiddenPopUp() {
    this.hiddenPopUpScore = true;
    this.eventEmitterHiddenPopUpScore.emit(this.hiddenPopUpScore);
  }

  submitScore() {
    let object = {"scores" : []};
    this.starArray.controls.forEach((scoreForm: FormGroup) => {
      let scoreUser = {
        userId: scoreForm.value.userId,
        score: scoreForm.value.star,
      };
      object.scores.push(scoreUser);
    });
    this.eventEmitterScoreUsers.emit(object);
    this.hiddenPopUp();
  }
}
