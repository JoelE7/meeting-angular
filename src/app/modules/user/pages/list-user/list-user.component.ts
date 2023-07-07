import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/api/services/user/user.service';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ListUserComponent implements OnInit {

  currentUser: User = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : undefined;

  developers: User[] = [];

  spinner = true;

  paginate: any = 1;

  totalRecords = 0;

  size = 10;

  constructor(private usersService: UserService,private messageService:MessageService) {}

  ngOnInit(): void {
    this.getUsersByRanking();
  }

  getUsersByRanking() {
    this.usersService.getAllUsersByRanking(this.paginate).subscribe(
      (data) => {
        this.developers = data.results;
        this.totalRecords = data.count;
        this.spinner = false;
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

  paginateFunction(event: any) {
    this.paginate = event.page + 1;
    this.size = event.rows;
    this.getUsersByRanking();
  }
}
