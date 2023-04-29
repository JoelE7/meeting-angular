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

Component;

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css'],
})
export class FormProjectComponent {
  title: string = 'Crear proyecto';

  @Input() // de padre a hijo
  project: Project = new Project();
  //de hijo a padre
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
        type: 'FRONT-END',
        value: '1',
      },
      {
        type: 'BACK-END',
        value: '2',
      }
    );
    this.complexityProject.push(
      {
        level: 'BAJO',
        value: '1',
      },
      {
        level: 'MEDIO',
        value: '2',
      },
      {
        level: 'ALTO',
        value: '3',
      }
    );
  }

  ngOnInit(): void {
    if (this.project._id != undefined) {
      this.title = 'Editar proyecto';
    }
    this.startFrom();
    this.form.get('startDate').disable();
  }

  startFrom() {
    this.form = new FormGroup({
      name: new FormControl(this.project.name, [Validators.required]),
      description: new FormControl(this.project.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
      startDate: new FormControl(this.project.startDate || new Date(), [
        Validators.required,
      ]),
      endDate: new FormControl(this.project.endDate, [Validators.required]),
      typeProject: new FormControl(this.project.typeProject, [
        Validators.required,
      ]),
      complexity: new FormControl(this.project.complexity, [
        Validators.required,
      ]),
      status: new FormControl(this.project.status, [Validators.required]),
      amountParticipants: new FormControl(this.project.amountParticipants, [
        Validators.required,
        Validators.min(1),
      ]),
      lider: new FormControl(this.project.liderId || false, []),
      requestSupport: new FormControl(this.project.requestSupport || false, []),
    });
  }

  submitProject() {
    this.newproject.name = this.form.get('name').value;
    this.newproject.description = this.form.get('description').value;
    this.newproject.startDate = this.form.get('startDate').value;
    this.newproject.endDate = this.form.get('endDate').value;
    this.newproject.complexity = this.form.get('complexity').value;
    this.newproject.typeProject = this.form.get('typeProject').value;
    this.newproject.amountParticipants =
      this.form.get('amountParticipants').value;
    this.newproject.status = this.form.get('status').value;
    this.newproject.liderId = this.form.get('lider').value;
    this.newproject.requestSupport = this.form.get('requestSupport').value;

    this.emitProject.emit(this.newproject);
  }
}
