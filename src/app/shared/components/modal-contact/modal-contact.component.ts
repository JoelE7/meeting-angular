import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user/user.class';
import { MessageService } from 'primeng/api';
import { Mail } from 'src/app/shared/models/model-mail-contact/model-mail.interface';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalContactComponent implements OnInit {
  formContact: FormGroup;

  @Input()
  userEmisor: User = new User();

  @Input()
  userReceptor: User = new User();

  mail: Mail;

  @Output()
  emitContact: EventEmitter<Mail> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.startForm();
    this.formContact.get('to').disable();
    this.formContact.get('for').disable();
    this.formContact.get('to').setValue(this.userEmisor.email);
    this.formContact.get('for').setValue(this.userReceptor.email);
  }
  startForm() {
    this.formContact = new FormGroup({
      to: new FormControl(),
      for: new FormControl(),
      message: new FormControl("",[Validators.required,Validators.minLength(3)]),
    });
  }

  submitContact() {
     this.mail = {
      user: this.userEmisor,
      email: this.userReceptor.email,
      message: this.formContact.get('message').value,
    };

    this.emitContact.emit(this.mail);
  }
}
