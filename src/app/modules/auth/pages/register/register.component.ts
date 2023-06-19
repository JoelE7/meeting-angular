import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { User } from 'src/app/shared/models/user/user.class';
import { Profile } from 'src/app/shared/models/profile/profile.class';
import { Item } from 'src/app/shared/models/model-forms/item-form.interface';
import { DataService } from 'src/app/api/services/data/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  userRegister: User = new User();
  form: FormGroup;

  profiles:Profile[] = [
    {description : "FullStack",valueProfile : "FullStack"},
    {description : "Frontend",valueProfile : "Frontend"},
    {description : "Backend",valueProfile : "Backend"},
    {description : "Diseñador/a",valueProfile : "Diseñador/a"},
    {description : "QA",valueProfile : "QA"},
    {description : "Analista Funcional",valueProfile : "Analista Funcional"},

  ]

  technologies: Item[] = [];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService:AuthService,
    private dataService:DataService
  ) {}

  ngOnInit(): void {
    this.getTechnologies();
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', Validators.required),
      profile: new FormControl('', Validators.required),
      mailEnabled: new FormControl(true),
      technologies : new FormControl('',[])
    });
  }

  register() {
    this.userRegister.name = this.form.get('name').value;
    this.userRegister.email = this.form.get('email').value;
    this.userRegister.password = this.form.get('pass').value;
    this.userRegister.role = this.form.get('profile').value;
    this.userRegister.preferences = this.form.get('technologies').value;
    this.userRegister.mailEnabled = this.form.get('mailEnabled').value;

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
          detail: 'Usuario o contraseña incorrectos',
        });
      }
    );
  }

  getTechnologies() {
    this.dataService.getTechnologies().subscribe({
      next: (data) => {
        for (let i = 0; i < data.technologies.length; i++) {
          this.technologies.push({
            label: data.technologies[i],
            value: data.technologies[i],
          });
        }
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
