import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Project } from 'src/app/shared/models/project/project.class';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user/user.class';
import { MailInvitation } from 'src/app/shared/models/model-mail-invitation/model-mail-invitation.interface';
import { Message, MessageService } from 'primeng/api';
import { UserService } from 'src/app/api/services/user/user.service';

@Component({
  selector: 'app-modal-invitation',
  templateUrl: './modal-invitation.component.html',
  styleUrls: ['./modal-invitation.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalInvitationComponent implements OnInit {
  formContact: FormGroup;

  @Input()
  idCurrentUser = "";

  @Input()
  userEmisor: any ;

  @Input()
  userReceptor: User = new User();

  mail: MailInvitation;

  @Output()
  emitContact: EventEmitter<MailInvitation> = new EventEmitter();

  messages: Message[] = [];

  constructor(private messageService: MessageService,private userService:UserService) {}

  ngOnInit(): void {
    this.startForm();
    this.formContact.get('for').disable();
    this.messages = [
      { severity: 'info', detail: 'Podes contactar a esta persona para invitarla a tu proyecto' }
    ];
  }
  startForm() {
    this.formContact = new FormGroup({
      for: new FormControl(this.userReceptor?.email),
      message: new FormControl('', [
      ]),
      project: new FormControl("",[Validators.required]),
    });
  }

  submitContact() {
    this.mail = {
      user: this.userEmisor,
      email: this.userReceptor.email,
      message: this.formContact.get('message').value,
      project: this.formContact.get('project').value,
    };


    this.emitContact.emit(this.mail);
  }
}
