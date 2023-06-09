import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/api/services/user/user.service';
import { Message } from 'primeng/api';
import { MailSuggest } from 'src/app/shared/models/model-mail-suggest/model-mail.interface';
import { Post } from 'src/app/shared/models/post/post.class';
import { User } from 'src/app/shared/models/user/user.class';
import { Project } from 'src/app/shared/models/project/project.class';
import { MailInvitation } from 'src/app/shared/models/model-mail-invitation/model-mail-invitation.interface';
@Component({
  selector: 'app-modal-invitation-project',
  templateUrl: './modal-invitation-project.component.html',
  styleUrls: ['./modal-invitation-project.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ModalInvitationProjectComponent {
  formContact: FormGroup;

  @Input()
  userEmisor: User = new User();

  @Input()
  userReceptor: User = new User();

  @Input()
  project: Project = new Project();

  mail: MailInvitation;

  @Output()
  emitContact: EventEmitter<MailInvitation> = new EventEmitter();

  usersReceptor: User[] = [];
  filteredCountries: User[] = [];

  messages: Message[] = [];

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.startForm();
    this.messages = [
      { severity: 'info', detail: 'Podes sugerirle este proyecto a un conocido por email' }
    ];
    this.getUsers();
  }
  startForm() {
    this.formContact = new FormGroup({
      for: new FormControl('', [Validators.required]),
      message: new FormControl('', []),
    });
  }

  getUsers() {
    this.userService.getAllUser().subscribe(
      (data) => {
        this.usersReceptor = data;
        this.removeCurrentUserFilters();
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      }
    );
  }

  submitContact() {
    this.mail = {
      user: this.userEmisor,
      email: this.formContact.get('for').value?.email,
      message: this.formContact.get('message').value,
      project: this.project
    };

    this.emitContact.emit(this.mail);
  }

  filterUsers(event) {
    let filtered: User[] = [];
    let query = event.query;

    for (let i = 0; i < this.usersReceptor.length; i++) {
      let user: User = this.usersReceptor[i];
      if (user.email.toLowerCase().indexOf(query.toLowerCase()) == 0 && user.mailEnabled) {
        filtered.push(user);
      }
    }

    this.filteredCountries = filtered;
  }

  removeCurrentUserFilters() {
    let index = this.usersReceptor.findIndex(
      (user: User) => user._id === this.userEmisor._id
    );
    if (index != -1) {
      this.usersReceptor.splice(index, 1);
    }
  }
}
