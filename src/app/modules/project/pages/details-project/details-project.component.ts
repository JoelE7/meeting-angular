import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';
import { Task } from '../../interfaces/tasks.interface';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { User } from 'src/app/shared/models/user/user.class';
import {
  MetricProject,
  CommitByUser,
} from '../../interfaces/metricProject.interface';
import { MailInvitation } from 'src/app/shared/models/model-mail-invitation/model-mail-invitation.interface';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsProjectComponent implements OnInit {
  activeIndex: number = 0;
  idParam: any;

  searchProject: Project = new Project();

  currentUser: User =
    localStorage.getItem('user') != 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : undefined;
  userExistProject: boolean = false;

  visiblePopUpScore = false;
  visiblePopUpInvitationProject = false;
  spinner = true;

  metricProject: any;
  linkRepositoryProject = '';
  visibleInputRepository: boolean = false;
  spinnerMetric = true;


  //integrantes
  userSeeProgressId: string = '';
  advancement: boolean = false;

  //métricas
  commitActivity: any = '';
  data: any;
  dataRadar: any;

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
    
    this.searchProject.roleUser =
      this.searchProject.leader?._id == this.currentUser?._id
        ? 'leader'
        : this.searchProject.participants.some(
            (user) => user?._id === this.currentUser?._id
          )
        ? 'participant'
        : this.searchProject.supports.some(
            (supp) => supp?._id === this.currentUser?._id
          )
        ? 'support'
        : '';
    this.checkUserIfExistsInProject();
    this.spinner = false;
  }

  linkInputProjectToRepository() {
    this.visibleInputRepository = true;
  }

  backLinkToRepository() {
    this.visibleInputRepository = false;
  }

  async linkProjectToRepository() {
    if (this.linkRepositoryProject == '') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Coloca la url de tu proyecto',
      });
      return;
    }

    await new Promise((resolve, reject) => {
      this.searchProject.urlRepository = this.linkRepositoryProject;
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
            this.ngOnInit();
          } else {
            this.messageService.add({
              severity: 'warn',
              summary: 'No te pudiste unir al proyecto',
              detail: data.body.message,
            });
          }
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

  seeProgressMember(userId: string) {
    this.advancement = true;
    this.userSeeProgressId = userId;
  }

  backMembersProject() {
    this.advancement = false;
  }

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

    this.commitActivity = this.metricProject?.commitActivity;
    this.metricProject.commitByUser.forEach((data: any) => {
      developers.push(data.developerUsername);
      commits.push(data.commits.commitCount);
      commitsFrequency.push(data.commits.commitFrequencyByDay);
    });

    this.metricProject.contributionDistributionByType.forEach((data: any) => {
      types.push(data.type);

      if (data.type == 'commits') {
      }
      if (data.type == 'pullRequests') {
        data.data.forEach((pullRequestUser: any) => {
          pullRequest.push(pullRequestUser.quantity);
        });
      }
      if (data.type == 'issues') {
        data.data.forEach((issuesUser: any) => {
          issues.push(issuesUser.quantity);
        });
      }
    });

    this.getMetricGrafic(developers, commits, commitsFrequency);
    this.getMetricRadar(developers, types, commits, pullRequest, issues);
    this.spinnerMetric = false;
  }



  getMetricRadar(
    developers: any,
    types: any,
    releases: any,
    pullRequest: any,
    issues: any
  ) {
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

  sendMailSuggestProject(mail: MailInvitation) {
    this.projectService.sendMailInvitation(mail).subscribe(
      (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Enviado',
          detail: '¡Su sugerencia ha sido enviado con éxito!',
        });
        this.visiblePopUpInvitationProject = false;
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

  finishProjectPopUp() {
    this.visiblePopUpScore = true;
  }

  invitationProjectPopUp() {
    this.visiblePopUpInvitationProject = true;
  }

  hiddenPopUpScore(hiddenPopUp: any) {
    this.visiblePopUpScore = !hiddenPopUp;
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
}
