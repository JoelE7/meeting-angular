import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  users: User[] = [];
  usersAsync: User[] = [];

  query: any[] = [];

  spinner = true;

  constructor(private messageService: MessageService) {
    
  }
  ngOnInit(): void {

  }
}
