import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user/user.class';
import { DataService } from 'src/app/api/services/data/data.service';
import { Item } from 'src/app/shared/models/model-forms/item-form.interface';
import { MessageService } from 'primeng/api';
import { Profile } from 'src/app/shared/models/profile/profile.class';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {

  currentUser: User =
  localStorage.getItem('user') != 'undefined'
    ? JSON.parse(localStorage.getItem('user'))
    : undefined;

  title: string = 'Editar usuario';

  @Input()
  user: User = new User();

  @Output()
  emitUser: EventEmitter<User> = new EventEmitter();

  form: FormGroup;

  technologies: Item[] = [];

  overlay:boolean = false;

  profiles:Profile[] = [
    {description : "FullStack",valueProfile : "FullStack"},
    {description : "Frontend",valueProfile : "Frontend"},
    {description : "Backend",valueProfile : "Backend"},
    {description : "Diseñador/a",valueProfile : "Diseñador/a"},
    {description : "QA",valueProfile : "QA"},
    {description : "Analista Funcional",valueProfile : "Analista Funcional"},

  ]

  constructor(private dataService:DataService,private messageService:MessageService) {

  }

  ngOnInit(): void {
    if (this.user._id != undefined) {
      this.title = 'Actualizar usuario';
      this.overlay = true;
      setTimeout(async()=>{
        await new Promise((resolve,reject)=>{
          this.overlay = false;
        })
      },300)
    }
    this.getTechnologies();
    this.startFrom();
  }

  getTechnologies() {
    this.dataService.getTechnologies().subscribe(
      (data) => {
        for (let i = 0; i < data.technologies.length; i++) {
          this.technologies.push({
            label: data.technologies[i],
            value: data.technologies[i],
          });
        }
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

  startFrom() {
    this.form = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required]),

      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      technologies: new FormControl(this.user.preferences ? this.user.preferences : [],[Validators.required]),
      profile: new FormControl(this.user.role ? this.user.role : "",[Validators.required]),
      github: new FormControl(this.user.githubUsername, []),
      gitlab: new FormControl(this.user.gitlabUsername, []),
      mailEnabled: new FormControl(this.user.mailEnabled, []),
    });
  }

  submitProject() {
    this.user.name = this.form.get('name').value;
    this.user.email = this.form.get('email').value;
    this.user.preferences = this.form.get('technologies').value;
    this.user.role = this.form.get('profile').value;
    this.user.githubUsername = this.form.get('github').value;
    this.user.gitlabUsername = this.form.get('gitlab').value;
    this.user.mailEnabled = this.form.get('mailEnabled').value;

    this.emitUser.emit(this.user);
  }
}
