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
import { MessageService } from 'primeng/api';
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

  constructor(private messageService: MessageService,private userService:UserService) {}

  ngOnInit(): void {
    this.startForm();
    this.formContact.get('to').disable();
    this.formContact.get('for').disable();
  }
  startForm() {
    this.formContact = new FormGroup({
      to: new FormControl(this.userEmisor?.email),
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

    console.log(this.mail);
    

    this.emitContact.emit(this.mail);
  }
}
