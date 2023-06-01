import {
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

Component;

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FormProjectComponent {

  currentUser: User = JSON.parse(localStorage.getItem('user')) || undefined;

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

  constructor() {
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
        type: 'Movil',
        value: 'Mobile',
      },
      {
        type: 'Videjuegos',
        value: 'Videogames',
      },
      {
        type: 'Escritorio',
        value: 'Desktop',
      }
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
        level: 'Semisenior',
        value: 'Semisenior',
      },
      {
        level: 'Senior',
        value: 'Senior',
      }
    );
  }

  ngOnInit(): void {
    if (this.project._id != undefined) {
      this.title = 'Editar proyecto';
    }
    this.startFrom();
    //this.form.get('startDate').disable();
  }

  startFrom() {
    this.form = new FormGroup({
      name: new FormControl(this.project.name, [Validators.required]),
      description: new FormControl(this.project.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
      startDate: new FormControl(this.project.startDate, [
        Validators.required,
      ]),
      // startDate: new FormControl(this.project.startDate || new Date(), [
      //   Validators.required,
      // ]),
      endDate: new FormControl(this.project.endDate, [Validators.required]),
      typeProject: new FormControl(this.project.type, [
        Validators.required,
      ]),
      complexity: new FormControl(this.project.complexity, [
        Validators.required,
      ]),
      amountParticipants: new FormControl(this.project.amountParticipants, [
        Validators.required,
        Validators.min(1),
      ]),
      lider: new FormControl(this.project.leader || false, []),
      requestSupport: new FormControl(this.project.requestSupport || false, []),
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
    this.newproject.leader = this.form.get('lider').value ? this.currentUser._id : "";
    //this.newproject.requestSupport = this.form.get('requestSupport').value;

    this.emitProject.emit(this.newproject);
  }
}
