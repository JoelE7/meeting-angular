import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/shared/models/project/project.class';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user/user.class';
import { MailInvitation } from 'src/app/shared/models/model-mail-invitation/model-mail-invitation.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modal-invitation',
  templateUrl: './modal-invitation.component.html',
  styleUrls: ['./modal-invitation.component.css']
})
export class ModalInvitationComponent {

  formContact: FormGroup;

  @Input()
  userEmisor: User = new User();

  @Input()
  userReceptor: User = new User();
  
  @Input()
  project: Project = new Project();;

  mail: MailInvitation;

  @Output()
  emitContact: EventEmitter<MailInvitation> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.startForm();
    this.formContact.get('to').disable();
    this.formContact.get('to').setValue(this.userEmisor.email);
    this.formContact.get('for').disable();
    this.formContact.get('for').setValue(this.userReceptor.email);
    this.formContact.get('project').setValue(this.project.name)
  }
  startForm() {
    this.formContact = new FormGroup({
      to: new FormControl(),
      for: new FormControl(),
      message: new FormControl("",[Validators.required,Validators.minLength(3)]),
       project:new FormControl(),
     
    });
  }

  submitContact() {
    this.mail = {
      user: this.userEmisor,
      email: this.userReceptor.email,
      message: this.formContact.get('message').value,
      project: this.project,
    };

    this.emitContact.emit(this.mail);
  }

}
