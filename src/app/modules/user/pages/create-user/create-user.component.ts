import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { UserService } from 'src/app/api/services/user/user.service';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  searchUser: User;

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private route: Router
  ) {}

  createUser(user: User) {
    this.authService.registerUser(user).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: '¡Hecho!',
          detail: 'El usuario fue creado con éxito',
        });
        this.route.navigate(['/user/list-users']);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      },
    });
  }
}
