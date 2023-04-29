import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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

  constructor(
    private router: Router,
    private messageService: MessageService
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
    this.userRegister.role = 'user';
    this.userRegister.password = this.form.get('pass').value;
  }
}
