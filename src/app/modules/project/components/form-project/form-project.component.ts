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
import { Project } from 'src/app/shared/models/project/project.class';
import { TypeProject } from '../../interfaces/typeProject.interface';
import { ComplexityProject } from '../../interfaces/complexityProject.interface';
import { StatusProject } from '../../interfaces/statusProject.interface';
import { Confirm } from '../../interfaces/confirm.interface';
import { User } from 'src/app/shared/models/user/user.class';
import { DataService } from 'src/app/api/services/data/data.service';
import { Item } from 'src/app/shared/models/model-forms/item-form.interface';
import { MessageService } from 'primeng/api';

Component;

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FormProjectComponent implements OnInit{

  currentUser: User =
  localStorage.getItem('user') != 'undefined'
    ? JSON.parse(localStorage.getItem('user'))
    : undefined;

  title: string = 'Crear proyecto';

  @Input()
  project: Project = new Project();

  @Output()
  emitProject: EventEmitter<Project> = new EventEmitter();

  form: FormGroup;

  newproject: Project = new Project();

  typeProject: TypeProject[] = [];
  complexityProject: ComplexityProject[] = [];
  statusProject: StatusProject[] = [];
  confirm: Confirm[] = [];

  technologies: Item[] = [];

  overlay:boolean = false;

  constructor(private dataService:DataService,private messageService:MessageService) {
    this.confirm.push(
      {
        label: 'SI',
        value: true,
      },
      {
        label: 'NO',
        value: false,
      }
    );
    this.typeProject.push(
      {
        type: 'Web',
        value: 'Web',
      },
      {
        type: 'Móvil',
        value: 'Mobile',
      },
      {
        type: 'Videojuegos',
        value: 'Videogames',
      },
      {
        type: 'Escritorio',
        value: 'Desktop',
      },
    );
    this.complexityProject.push(
      {
        level: 'Trainee',
        value: 'Trainee',
      },
      {
        level: 'Junior',
        value: 'Junior',
      },
      {
        level: 'Senior',
        value: 'Senior',
      }
    );
  }

  ngOnInit(): void {
    if (this.project._id != undefined) {
      this.title = 'Actualizar proyecto';
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
      name: new FormControl(this.project.name, [Validators.required,Validators.minLength(3)]),
      description: new FormControl(this.project.description, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ]),
      startDate: new FormControl(this.project.startDate ? new Date(this.project.startDate) : "",[
        Validators.required,
      ]),
      endDate: new FormControl(this.project.endDate ?  new Date(this.project.endDate) : "", [Validators.required]),
      typeProject: new FormControl(this.project.type, [
        Validators.required,
      ]),
      complexity: new FormControl(this.project.complexity, [
        Validators.required,
      ]),
      amountParticipants: new FormControl(this.project.amountParticipants, [
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ]),
      repository: new FormControl(this.project.urlRepository ? this.project.urlRepository  : "", []),
      requestSupport: new FormControl(this.project.requestSupport || false, []),
      validateSystem : new FormControl(this.project.validateSystem ? true : false,[]),
      technologies: new FormControl(this.project.technologies ? this.project.technologies : [],[Validators.required]),
    });
  }

  submitProject() {
    this.newproject.name = this.form.get('name').value;
    this.newproject.description = this.form.get('description').value;
    this.newproject.startDate = this.form.get('startDate').value;
    this.newproject.endDate = this.form.get('endDate').value;
    this.newproject.complexity = this.form.get('complexity').value;
    this.newproject.type = this.form.get('typeProject').value;
    this.newproject.amountParticipants =
      this.form.get('amountParticipants').value;
    //this.newproject.status = this.form.get('status').value;
    this.newproject.leader = this.currentUser._id;
    this.newproject.validateSystem = this.form.get('validateSystem').value;
    this.newproject.technologies = this.form.get('technologies').value;
    //this.newproject.requestSupport = this.form.get('requestSupport').value;

    this.emitProject.emit(this.newproject);
  }
}
