import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-mvp',
  templateUrl: './form-mvp.component.html',
  styleUrls: ['./form-mvp.component.css'],
})
export class FormMvpComponent implements OnInit {
  integrants: ['Ezequiel', 'Joel', 'Nahuel', 'Jessica', 'Diego']
  @Input() // de padre a hijo
  mvp: any = ""
  //de hijo a padre
  @Output()
  emitMvp: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.mvp.name, [Validators.required]),
    });
  }

  submitMvp() {
    this.mvp.name = this.form.get('name').value;

    this.emitMvp.emit(this.mvp);
  }
}
