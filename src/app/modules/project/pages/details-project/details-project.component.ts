import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';
import { Task } from '../../interfaces/tasks.interface';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/shared/models/user/user.class';
import { MetricProject } from '../../interfaces/metricProject.interface';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsProjectComponent implements OnInit {

  activeIndex = 0;
  idParam: any;

  profile: [];

  projectAccept = false;

  searchProject: Project = new Project();

  currentUser: User = JSON.parse(localStorage.getItem('user')) || undefined;
  userExistProject: boolean = false;

  visiblePopUpScore = false;
  visibleInputGithub: boolean = false;
  linkGithubProject = '';
  spinner = true;

  integrants: [{ '1' }, { '2' }];
  users = [
    {
      name: 'Joel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 1,
          message: 'Home Page',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 2,
          message: 'Agrego Estilos',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 3,
          message: 'Agrego Tests',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Nahuel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 1,
          message: 'Agrego funcionalidad crear usuario',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 2,
          message: 'Modifico diseño',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 3,
          message: 'Agrego test',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Ezequiel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 4,
          message: 'Crear MVP',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 5,
          message: 'Agrego Test',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Jessica',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 6,
          message: 'Crear Proyecto',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 7,
          message: 'Agrego Graficos',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 8,
          message: 'Ajustes y estilos',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 9,
          message: 'Tests',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Diego',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 6,
          message: 'Modal',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 7,
          message: 'Tests',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
  ];

  puntuacion: boolean = false;

  metricProject: MetricProject[];

  spinnerMetric = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private projectService: ProjectService
  ) {}

  async ngOnInit() {
    let { id } = this.activatedRoute.snapshot.params;
    this.idParam = id;
    await this.getDetailsProject(id);
    if (this.searchProject.urlRepository) {
      this.getMetricByProject();
    }
  }

  async getDetailsProject(id: string) {
    this.searchProject = await this.projectService.detailsProjectAsync(id);
    console.log(this.searchProject);
    
    this.checkUserIfExistsInProject();
    this.spinner = false;
  }

  joinAProject(support: boolean = false) {
    if (!this.currentUser) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Inicia sesión o registrate',
        detail:
          'Para poder unirte a un proyecto, debes iniciar sesión en la plataforma',
      });
      return;
    }

    let message = support
      ? 'Te has unido al proyecto ' +
        this.searchProject.name +
        ' exitosamente como soporte'
      : 'Te has unido al proyecto ' +
        this.searchProject.name +
        ' exitosamente como integrante';

    this.projectService
      .joinProject(this.currentUser._id, this.searchProject._id, support)
      .subscribe(
        (data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Hecho',
            detail: message,
          });
          this.getDetailsProject(this.idParam);
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

  finishProjectPopUp() {
    this.puntuacion = true;
    this.visiblePopUpScore = true;
  }

  hiddenPopUpScore(hiddenPopUp: any) {
    this.visiblePopUpScore = !hiddenPopUp;
  }

  linkInputProjectWithGithub() {
    this.visibleInputGithub = true;
  }

  async linkProjectWithGithub() {
    if (this.linkGithubProject == '') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Coloca la url de tu proyecto',
      });
      return;
    }

    await new Promise((resolve, reject) => {
      this.searchProject.urlRepository = this.linkGithubProject;
      resolve('');
    });

    this.projectService.updateProject(this.searchProject).subscribe(
      (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Hecho',
          detail: 'El proyecto fue vinculado exitosamente',
        });
        this.getMetricByProject();
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

  checkUserIfExistsInProject() {
    if (this.currentUser && this.searchProject) {
      for (let participant of this.searchProject.participants) {
        participant?._id === this.currentUser._id
          ? (this.userExistProject = true)
          : '';
      }
      for (let supports of this.searchProject.supports) {
        supports?._id === this.currentUser._id
          ? (this.userExistProject = true)
          : '';
      }

      this.searchProject.leader?._id === this.currentUser._id
        ? (this.userExistProject = true)
        : '';
    }
  }

  finishProject(scores: any) {
    this.projectService
      .finalizeProject(this.searchProject._id, scores)
      .subscribe(
        async (data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Hecho!',
            detail: 'El proyecto fue finalizado con exito',
          });
          this.spinner = true;
          await this.getDetailsProject(this.idParam);
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

  async getMetricByProject() {
    this.metricProject = await this.projectService.getMetricByProject(
      this.searchProject._id
    );
    let developers = [];
    let commits = [];
    let commitsFrequency = [];

    this.metricProject.forEach((metric) => {
      developers.push(metric.developerUsername);
      commits.push(metric.commits.commitCount);
      commitsFrequency.push(metric.commits.commitFrequencyByDay);
    });

    this.getMetricGrafic(developers, commits, commitsFrequency);
    this.spinnerMetric = false;
  }

  data: any;

  getMetricGrafic(
    devoloper: string[],
    commits: string[],
    commitsFrequency: string[]
  ) {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: devoloper,
      datasets: [
        {
          label: 'Cantidad de commits',
          backgroundColor: documentStyle.getPropertyValue('--purple-300'),
          borderColor: documentStyle.getPropertyValue('--purple-300'),
          data: commits,
        },
        {
          label: 'Frecuencia de commits',
          backgroundColor: documentStyle.getPropertyValue('--purple-900'),
          borderColor: documentStyle.getPropertyValue('--purple-900'),
          data: commitsFrequency,
        },
      ],
    };
  }

  userSeeProgressId:string = "";

  seeProgressMember(userId:string){
    this.userSeeProgressId = userId;
    this.activeIndex = 4;
  }
}
