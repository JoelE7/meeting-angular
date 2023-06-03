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
import { QuestionPreferenceUser } from '../../interfaces/questionPreferenceUser.interface';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ListProjectComponent implements OnInit {
  spinner = true;
  spinnerSuggestion = true;
  currentUser: User = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : undefined;  
  userExistProject: boolean = false;

  listProject: Project[] = [];
  suggestionsProject: Project[] = [];

  typeProyects = [];
  complexitys = [];

  visiblePopUpQuestion: Boolean = false;

  query;

  question: string = '';
  responseQuestion: string = '';

  paginate: any = 1;

  totalRecords = 0;

  size = 10;

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
              value: 'Trainee',
            },
            {
              label: 'Junior',
              value: 'Junior',
            },
            {
              label: 'Semisenior',
              value: 'Semisenior',
            },
            {
              label: 'Senior',
              value: 'Senior',
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
              value: 'Web',
            },
            {
              label: 'Movil',
              value: 'Mobile',
            },
            {
              label: 'Videojuegos',
              value: 'Videogames',
            },
            {
              label: 'Escritorio',
              value: 'Desktop',
            },
          ],
        },
      },
      {
        type: FilterEnum.CHECKBOX,
        col: 'col-12 mt-3 mt-md-2',
        title: 'Tecnologías',
        nameFilter: 'technologies',
        valueFilter: '',
        checkboxItems: {
          column: false,
          items: [
            {
              label: 'Angular',
              value: 'Angular',
            },
            {
              label: 'React',
              value: 'React',
            },
            {
              label: 'Vue',
              value: 'Vue',
            },
            {
              label: 'Spring',
              value: 'Spring',
            },
            {
              label: 'Node.js',
              value: 'Nodejs',
            },
            {
              label: 'Javascript',
              value: 'Javascript',
            },
            {
              label: 'Java',
              value: 'Java',
            },
            {
              label: 'Python',
              value: 'Python',
            },
            {
              label: 'C',
              value: 'C',
            },
            {
              label: 'Typescript',
              value: 'Typescript',
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

    this.getSuggestedProjects();
    this.getProjects();
    if (this.currentUser) {
      this.getQuestion();
    }
  }

  getProjects() {
    this.projectService.getAllProjects(this.query,this.paginate).subscribe(
      (data) => {       
        console.log(data);
        
        this.listProject = data.results;
        this.totalRecords=data.count
        this.spinner = false;
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

  getSuggestedProjects() {
    this.projectService.getSuggestedProjects(this.currentUser).subscribe(
      (data) => {
        this.suggestionsProject = data.result;
        this.spinnerSuggestion = false;
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
    answer
      ? this.currentUser.preferences.push(this.responseQuestion)
      : this.currentUser.disinterest.push(this.responseQuestion);

    this.userService
      .updatePreferences(this.currentUser, {
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
    this.spinner = true;
    this.getProjects();
  }

  getQuestion() {
    this.userService.getRecommendationQuestionUser(this.currentUser).subscribe(
      (data: QuestionPreferenceUser) => {
        let { question, technologie } = data.result;
        this.question = question;
        this.responseQuestion = technologie;
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

  paginatePosts(event){
    this.paginate = event.page + 1;
    this.size = event.rows;
    this.getProjects();
  }
}