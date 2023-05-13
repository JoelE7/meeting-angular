import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';
import { Task } from '../../interfaces/tasks.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsProjectComponent implements OnInit {
  profile: [];

  projectAccept = false;

  searchProject: Project = new Project();

  integrants: [{'1'},{'2'}];
  users = [
    {
      name: 'Joel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 1, message: 'Home Page', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 2, message: 'Agrego Estilos', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 3, message: 'Agrego Tests', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' }
      ]
    },
    {
      name: 'Nahuel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 1, message: 'Agrego funcionalidad crear usuario' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 2, message: 'Modifico diseño', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 3, message: 'Agrego test', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444'}
      ]
    },
    {
      name: 'Ezequiel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 4, message: 'Crear MVP' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 5, message: 'Agrego Test' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444'}
      ]
    },
    {
      name: 'Jessica',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 6, message: 'Crear Proyecto' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 7, message: 'Agrego Graficos' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 8, message: 'Ajustes y estilos' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 9, message: 'Tests' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' }
      ]
    },
    {
      name: 'Diego',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 6, message: 'Modal' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 7, message: 'Tests' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' }
      ]
    }
  ];
  tasks: Task[] = [
    {
      numberTask: '1',
      name: 'CRUD de Tareas',
      status: 'IN_PROCESS',
      assignedMember: 'Joel',
    },
    {
      numberTask: '2',
      name: 'CRUD de Mvp',
      status: 'FINALIZED',
      assignedMember: 'Ezequiel',
    },
    {
      numberTask: '3',
      name: 'CRUD de Usuarios',
      status: 'NOTASSIGNED',
    },
  ];

  activeIndex = 0;

  puntuacion:boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    let { id } = this.activatedRoute.snapshot.params;

    this.projectService.detailsProject(id).subscribe(
      (project) => {
        this.searchProject = project;
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

  joinAProject() {
    this.projectAccept = true;
  }

  finalizeProject(){
    this.puntuacion = true;
  }
}
