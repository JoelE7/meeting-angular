import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
})
export class ListProjectComponent implements OnInit {
  listProject: Project[] = [];

  typeProyects = [];
  complexitys = [];

  visiblePopUpQuestion:Boolean = true;

  question: string = '¿Te gustaría participar en un proyecto de react?';

  constructor(
    private messageService: MessageService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    let modal = parseInt(String(Math.random() * 2));
    if (modal == 1) {
      this.visiblePopUpQuestion = true;
    }

    this.projectService.getAllProjects().subscribe(
      (data) => {
        this.listProject = data;
      },
      (err) => {
        this.messageService.add({
          key: 'msg',
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      }
    );
  }

  answerQuestion(answer: Boolean) {
    console.log('Llego la respuesta a la pregunta del usuario');
    console.log(answer);
  }

  hiddenPopUpQuestion(hidden:Boolean){
    this.visiblePopUpQuestion = hidden;
  }
}
