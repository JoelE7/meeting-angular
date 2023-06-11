import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';
import { Task } from '../../interfaces/tasks.interface';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/shared/models/user/user.class';
import { MetricProject, CommitByUser } from '../../interfaces/metricProject.interface';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsProjectComponent implements OnInit {
  activeIndex: number = 0;
  idParam: any;

  profile: [];

  projectAccept = false;

  searchProject: Project = new Project();

  currentUser: User =
    localStorage.getItem('user') != 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : undefined;
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

  supports = [
    {
      name: 'Alejandro',
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
      name: 'Marcelo',
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
      name: 'Juan',
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
      name: 'Sebastian',
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
      name: 'Matias ',
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

  metricProject: any;

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
          if (data.status === 200) {
            this.messageService.add({
              severity: 'success',
              summary: 'Hecho',
              detail: message,
            });
            this.getDetailsProject(this.idParam);
          }else{
            this.messageService.add({
              severity: 'warn',
              summary: 'No te pudiste unir al proyecto',
              detail: data.body.message,
            });
          }
          console.log(data);
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

  linkInputProjectWithGitlab() {
    this.visibleInputGithub = true;
  }

  backLinkWithRepository(){
    this.visibleInputGithub = false;
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


  commitActivity:any = ""
  async getMetricByProject() {
    this.metricProject = await this.projectService.getMetricByProject(
      this.searchProject._id
    );

    let developers = [];
    let commits = [];
    let commitsFrequency = [];


    let types = [];
    let releases = [];
    let pullRequest = [];
    let issues = [];

    this.commitActivity = this.metricProject?.commitActivity
    this.metricProject.commitByUser.forEach((data:any) => {
      developers.push(data.developerUsername);
      commits.push(data.commits.commitCount)
      commitsFrequency.push(data.commits.commitFrequencyByDay);
    });

    this.metricProject.contributionDistributionByType.forEach((data:any) => {
      types.push(data.type);

      if(data.type == "commits"){

      }
      if(data.type == "pullRequests"){
        data.data.forEach((pullRequestUser:any) => {
          pullRequest.push(pullRequestUser.quantity)
        });
      }
      if(data.type == "issues"){
        data.data.forEach((issuesUser:any) => {
          issues.push(issuesUser.quantity)
        });
      }

      // commits.push(data.commits.commitCount)
      // commitsFrequency.push(data.commits.commitFrequencyByDay);
    });

    this.getMetricGrafic(developers, commits, commitsFrequency);
    this.getMetricRadar(developers,types,commits,pullRequest,issues)
    this.spinnerMetric = false;
  }

  data: any;
  dataRadar: any;

  getMetricRadar(developers:any,types:any,releases:any,pullRequest:any,issues:any){
    const documentStyle = getComputedStyle(document.documentElement);
    this.dataRadar = {
      labels: developers,
      datasets: [
        {
          label: 'Cantidad de releases',
          borderColor: documentStyle.getPropertyValue('--purple-300'),
          data: releases,
        },
        {
          label: 'Cantidad de pull request',
          borderColor: documentStyle.getPropertyValue('--bluegray-400'),
          data: pullRequest,
        },
        {
          label: 'Cantidad de issues abiertos',
          borderColor: documentStyle.getPropertyValue('--purple-600'),
          data: issues,
        },
      ],
    };
  }

  getMetricGrafic(
    devoloper: string[],
    commits: any[],
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

  userSeeProgressId: string = '';
  advancement: boolean = false;

  seeProgressMember(userId: string) {
    this.advancement = true;
    this.userSeeProgressId = userId;
  }

  backMembersProject() {
    this.advancement = false;
  }
}
