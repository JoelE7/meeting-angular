import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { Rol } from 'src/app/shared/models/rol/role.class';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  userRegister: User = new User();
  form: FormGroup;

  roles:Rol[] = [
    {description : "Usuario IT",valueRol : "USERIT"},
    {description : "Recruiter",valueRol : "RECRUITER"},
    {description : "EMPRESA",valueRol : "COMPANY"},
    {description : "Usuario IT",valueRol : "OTHER"},
  ]

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  register() {
    this.userRegister.name = this.form.get('name').value;
    this.userRegister.email = this.form.get('email').value;
    this.userRegister.role = this.form.get('role').value;
    this.userRegister.password = this.form.get('pass').value;

    this.authService.registerUser(this.userRegister).subscribe(
      async (data) => {
        this.messageService.add({
          severity: 'success',
          summary: '¡Hecho!',
          detail: '¡Ya podes iniciar sesión con tu cuenta creada!',
        });
        this.router.navigate(['/login']);
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
