import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Mail } from 'src/app/shared/models/model-mail-contact/model-mail.interface';
import { User } from 'src/app/shared/models/user/user.class';
import { UserService } from 'src/app/api/services/user/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TableUserComponent {
  @Input()
  developers: User[] = [];

  @Input()
  paginate: any = 1;

  @Input()
  totalRecords = 0;

  @Input()
  size = 10;

  paginateBoolean: boolean = true;

  visibleModalContact: boolean = false;

  currentUser: User =
    localStorage.getItem('user') != 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : undefined;

  userReceptor: User = new User();

  newContact: Mail;

  @Output()
  eventEmitterPaginate: EventEmitter<any> = new EventEmitter();

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  paginateEmit(event: any) {
    this.eventEmitterPaginate.emit(event);
  }
  showModalContact(userReceptor: User) {
    if(userReceptor.mailEnabled){
      this.userReceptor = userReceptor;
      this.visibleModalContact = true;
    }
  }

  hiddenPopUpModalContact() {
    this.userReceptor = new User();
  }

  sendMailContact(mail: Mail) {
    this.newContact = mail;
    console.log(this.newContact);

    this.userService.sendMailContact(this.newContact).subscribe(
      (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creado',
          detail: '¡Su mensaje ha sido enviado con éxito!',
        });
        this.visibleModalContact = false;
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

  seeProfile(id: string) {
    this.router.navigate(['/user/see-profile/' + id], {
      state: {
        seeProjects: true,
      },
    });
  }
}
