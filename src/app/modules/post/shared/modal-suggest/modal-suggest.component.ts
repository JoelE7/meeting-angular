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

@Component({
  selector: 'app-modal-suggest',
  templateUrl: './modal-suggest.component.html',
  styleUrls: ['./modal-suggest.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalSuggestComponent {
  formContact: FormGroup;

  @Input()
  userEmisor: User = new User();

  @Input()
  userReceptor: User = new User();

  @Input()
  post: Post = new Post();

  mail: MailSuggest;

  @Output()
  emitContact: EventEmitter<MailSuggest> = new EventEmitter();

  usersReceptor: User[] = [];
  filteredUsers: User[] = [];

  messages: Message[] = [];

  spinner = true;

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.messages = [
      {
        severity: 'info',
        detail: 'Podes enviarle este post a un conocido por email',
      },
    ];
    this.getUsers();
  }
  async startForm(): Promise<void> {
    this.formContact = new FormGroup({
      for: new FormControl('', [Validators.required]),
      message: new FormControl('', []),
    });
  }

  getUsers() {
    this.userService.getAllUser().subscribe({
      next: (data) => {
        this.usersReceptor = data;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      },
      complete: async () => {
        this.removeCurrentUserFilters();
        await this.startForm();
        this.spinner = false;
      },
    });
  }

  submitContact() {
    this.mail = {
      user: this.userEmisor,
      email: this.formContact.get('for').value?.email,
      message: this.formContact.get('message').value,
    };

    this.emitContact.emit(this.mail);
  }

  filterUsers(event) {
    let filtered: User[] = [];
    let query = event.query;

    for (let i = 0; i < this.usersReceptor.length; i++) {
      let user: User = this.usersReceptor[i];
      if (
        user.email.toLowerCase().indexOf(query.toLowerCase()) == 0 &&
        user.mailEnabled
      ) {
        filtered.push(user);
      }
    }

    this.filteredUsers = filtered;
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
