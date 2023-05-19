import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { UserService } from 'src/app/api/services/user/user.service';
import { FilterEnum } from 'src/app/shared/filters/enum/filters.enum';
import { Method } from 'src/app/shared/filters/enum/method.enum';
import { Filters } from 'src/app/shared/filters/interface/filters.interface';
import { FilterService } from 'src/app/shared/filters/services/filter.service';
import { Project } from 'src/app/shared/models/project/project.class';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ListProjectComponent implements OnInit {
  currentUser: User = JSON.parse(localStorage.getItem('user')) || undefined;

  listProject: Project[] = [];

  typeProyects = [];
  complexitys = [];

  visiblePopUpQuestion: Boolean = false;

  query;

  question: string = '¿Te gustaría participar en un proyecto de react?';

  filters: Filters = {
    autoSend: false,
    method: Method.POST,
    filtersCustom: [
      {
        type: FilterEnum.DROPDOWN,
        col: 'col-12 m-0 p-0',
        title: 'Complejidad',
        nameFilter: 'complexity',
        valueFilter: '',
        items: {
          label: 'label',
          value: 'value',
          items: [
            {
              label: 'Trainee',
              value: 'trainee',
            },
            {
              label: 'Junior',
              value: 'junior',
            },
            {
              label: 'Semisenior',
              value: 'semisenior',
            },
            {
              label: 'Senior',
              value: 'senior',
            },
          ],
        },
      },
      {
        type: FilterEnum.DROPDOWN,
        col: 'col-12 m-0 p-0',
        title: 'Tipo de aplicación',
        nameFilter: 'type',
        valueFilter: '',
        items: {
          label: 'label',
          value: 'value',
          items: [
            {
              label: 'Web',
              value: 'web',
            },
            {
              label: 'Movil',
              value: 'mobile',
            },
            {
              label: 'Videojuegos',
              value: 'videogames',
            },
            {
              label: 'Escritorio',
              value: 'desktop',
            },
          ],
        },
      },
      {
        type: FilterEnum.CHECKBOX,
        col: 'col-12 mt-3 mt-md-2',
        title: 'Técnologias',
        nameFilter: 'technologies',
        valueFilter: '',
        checkboxItems: {
          column: false,
          items: [
            {
              label: 'Angular',
              value: 'angular',
            },
            {
              label: 'React',
              value: 'react',
            },
            {
              label: 'Vue',
              value: 'vue',
            },
            {
              label: 'Spring',
              value: 'spring',
            },
            {
              label: 'Node.js',
              value: 'nodejs',
            },
            {
              label: 'Javascript',
              value: 'javascript',
            },
            {
              label: 'Java',
              value: 'java',
            },
            {
              label: 'Python',
              value: 'python',
            },
            {
              label: 'C',
              value: 'c',
            },
            {
              label: 'Typescript',
              value: 'typescript',
            },
          ],
        },
      },
      {
        type: FilterEnum.RADIO,
        col: 'col-12 mt-3 mt-md-2',
        title: 'Estado',
        nameFilter: 'status',
        valueFilter: '',
        radioItems: {
          column: false,
          name: 'languages',
          items: [
            {
              label: 'Por hacer',
              value: 'to do',
            },
            {
              label: 'En progreso',
              value: 'in progress',
            },
            {
              label: 'Hecho',
              value: 'dome',
            },
          ],
        },
      },
    ],
  };

  constructor(
    private messageService: MessageService,
    private projectService: ProjectService,
    private userService: UserService,
    private filtersService: FilterService
  ) {}

  ngOnInit(): void {
    let modal = parseInt(String(Math.random() * 2));
    if (modal == 1 && this.currentUser) {
      this.visiblePopUpQuestion = true;
    }

    this.getProjects();
    if (this.currentUser) {
      this.getQuestion();
    }
  }

  getProjects() {
    this.projectService.getAllProjects(this.query).subscribe(
      (data) => {
        this.listProject = data;
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

  answerQuestion(answer: Boolean) {
    console.log('Llego la respuesta a la pregunta del usuario');
    let technology = this.question.split(' ');
    let lastWord: string = technology[technology.length - 1].replace(
      /[.,;?!]/g,
      ''
    );

    answer
      ? this.currentUser.preferences.push(lastWord)
      : this.currentUser.disinterest.push(lastWord);

    this.userService
      .updateUser(this.currentUser, {
        $push: {
          preferences: this.currentUser.preferences,
          disinterest: this.currentUser.disinterest,
        },
      })
      .subscribe(
        (data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Hecho',
            detail: 'Gracias por respondernos, actualizaremos tus preferencias',
          });
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

  hiddenPopUpQuestion(hidden: Boolean) {
    this.visiblePopUpQuestion = hidden;
  }

  getFilters() {
    this.query = this.filtersService.getFilters();
    this.query.method = this.filters.method;
    this.getProjects();
  }

  getQuestion() {
    this.userService.getRecommendationQuestionUser(this.currentUser).subscribe(
      (question) => {
        let { result } = question;
        this.question = result;
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
