import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from '../../models/user/user.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{
  users: User[] = [];
  usersAsync: User[] = [];

  query: any[] = [];

  spinner = true;

  constructor(
    private messageService: MessageService
  ) {}

}
