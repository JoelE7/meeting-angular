import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/api/services/user/user.service';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ListUserComponent implements OnInit {
  developers: User[] = [];

  spinner = true;

  paginate: any = 1;

  totalRecords = 0;

  size = 10;

  constructor(private usersService: UserService) {}

  ngOnInit(): void {
    this.getUsersByRanking();
  }

  getUsersByRanking() {
    this.usersService.getAllUsersByRanking(this.paginate).subscribe(
      (data) => {
        this.developers = data.users;
        this.totalRecords = data.count;
        this.spinner = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  paginateFunction(event: any) {
    this.paginate = event.page + 1;
    this.size = event.rows;
    this.getUsersByRanking();
  }
}
