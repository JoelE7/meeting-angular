import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { User } from 'src/app/shared/models/user/user.class';


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


  visibleModalContact: boolean= false;


  currentUser: User = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : undefined;

  userEmisor: User = new User();


  @Output()
  eventEmitterPaginate: EventEmitter<any> = new EventEmitter();


  paginateEmit(event: any) {
    this.eventEmitterPaginate.emit(event);
  }
  showModalContact(userEmisor:User){
    this.userEmisor=userEmisor;
    this.visibleModalContact=true;
  }
}
