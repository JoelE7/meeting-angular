import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/api/services/user/user.service';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-see-my-profile',
  templateUrl: './see-my-profile.component.html',
  styleUrls: ['./see-my-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeeMyProfileComponent {
  metrics = {
    "contributions": 150,
    "contributionFrequency": 7,
    "codeComments": true,
    "qualityToolsUsed": true,
    "branchUsage": 5,
    "responseTime": 12,
    "popularity": 2000
  };

  searchUser: User = new User();

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let { id } = this.activatedRoute.snapshot.params;

    this.userService.detailsUser(id).subscribe(
      (user) => {
        this.searchUser = user;
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
}
