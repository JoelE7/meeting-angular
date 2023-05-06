import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  userLogin: User = new User();
  form: FormGroup;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', Validators.required),
    });
  }

  login() {
    this.userLogin.email = this.form.get('email').value;
    this.userLogin.password = this.form.get('pass').value;

    this.authService.loginUser(this.userLogin).subscribe(
      (data) => {
        this.messageService.add({
          severity: 'success',
          summary: '¡Hecho!',
          detail: '¡Inicio de sesión exitoso!',
        });
        this.router.navigate(['/home']);
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Usuario o contraseña incorretos',
        });
      }
    );
  }
}
