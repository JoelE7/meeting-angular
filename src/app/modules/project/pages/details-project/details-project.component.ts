import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';
import { Task } from '../../interfaces/tasks.interface';
import {
  ConfirmEventType,
  ConfirmationService,
  MenuItem,
  Message,
  MessageService,
} from 'primeng/api';
import { User } from 'src/app/shared/models/user/user.class';
import {
  MetricProject,
  CommitByUser,
} from '../../interfaces/metricProject.interface';
import { MailInvitation } from 'src/app/shared/models/model-mail-invitation/model-mail-invitation.interface';
import { TechnologiesService } from 'src/app/api/services/data/technologies.service';

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
  userExistSendRequest: boolean = false;

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

  sendRequestProjectSpinner = false;
  cancelRequestProjectSpinner = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private projectService: ProjectService,
    private technologiesService: TechnologiesService
  ) {}

  async ngOnInit() {
    let { id } = this.activatedRoute.snapshot.params;
    this.idParam = id;
    await this.getDetailsProject(id);

    if (this.searchProject?.urlRepository) {
      this.getMetricByProject();
    }
  }

  getIcon(technologie: string) {
    return this.technologiesService.getIcon(technologie);
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
    this.checkUserIfSendRequest();
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
              detail: data?.body?.message,
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

    /**Commits de los integrantes del proyecto (últimos 3) */
    this.commitActivity = this.metricProject?.commitActivity;

    /**Obtención de datos de la métrica de commits barra */
    let developers = [];

    if (this.metricProject?.commitByUser) {
      this.metricProject?.commitByUser.forEach((data: any) => {
        developers.push(data.developerUsername);
      });
    this.loadMetricDataBar(developers, this.metricProject?.commitByUser);
    }

    /**Cargar datos de la métrica radar */
    if(this.metricProject?.contributionDistributionByType){
      this.loadMetricDataRadar(
        developers,
        this.metricProject?.contributionDistributionByType
      );
    }

    this.spinnerMetric = false;
  }

  loadMetricDataBar(developers: string[], data: any) {
    let commits = [];
    let commitsFrequency = [];

    this.metricProject.commitByUser.forEach((data: any) => {
      commits.push(data.commits.commitCount);
      commitsFrequency.push(data.commits.commitFrequencyByDay);
    });
    this.showMetricGraficBar(developers, commits, commitsFrequency);
  }

  loadMetricDataRadar(developers: string[], data: any) {
    let releases = [];
    let pullRequest = [];
    let issues = [];

    data.forEach((data: any) => {
      if (data.type == 'releases') {
        data.data.forEach((release: any) => {
          releases.push(release.quantity);
        });
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
    this.showMetricRadar(developers, releases, pullRequest, issues);
  }

  showMetricRadar(
    developers: any,
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

  showMetricGraficBar(
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

  sendRequestToJoinTheProject() {
    this.sendRequestProjectSpinner = true;
    let request = { $push: { requests: this.currentUser._id } };

    this.projectService
      .sendRequestToJoinTheProject(this.searchProject, request)
      .subscribe({
        next: (data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Enviado',
            detail: '¡Su solicitud ha sido enviada con éxito!',
          });
          this.userExistSendRequest = true;
          this.sendRequestProjectSpinner = false;
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error ? err.error.message : 'Ups! ocurrio un error',
          });
        },
        complete: async () => {
          await this.getDetailsProject(this.idParam);
        },
      });
  }

  cancelRequestToJoinTheProject() {
    this.cancelRequestProjectSpinner = true;
    let request = { $pull: { requests: this.currentUser._id } };

    this.projectService
      .cancelRequestToJoinTheProject(this.searchProject, request)
      .subscribe({
        next: (data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Cancelado',
            detail: '¡Su solicitud ha sido cancelada con éxito!',
          });
          this.userExistSendRequest = false;
          this.cancelRequestProjectSpinner = false;
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error ? err.error.message : 'Ups! ocurrio un error',
          });
        },
        complete: async () => {
          await this.getDetailsProject(this.idParam);
        },
      });
  }

  leaveProjectConfirm() {
    this.confirmationService.confirm({
      message:
        '¿Está seguro que deseas abandonar esté proyecto? Al abandonar un proyecto recibís una penalización de 500 puntos',
      header: 'Confirmar abandono',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Abandonar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.leaveProject();
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Cancelado',
              detail: 'Usted ha cancelado',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelado',
              detail: 'Usted ha cancelado',
            });
            break;
        }
      },
    });
  }
  leaveProject() {
    let userLeave = {
      userId: this.currentUser._id,
    };

    this.projectService.leaveProject(this.searchProject, userLeave).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Hecho!',
          detail: '¡Has abandonado el proyecto con exito!',
        });
        this.messageService.add({
          severity: 'warn',
          summary: 'Penalización',
          detail: 'Se te han quitado 500 puntos',
        });
        this.userExistProject = false;
        this.ngOnInit();
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      },
    });
  }

  userRequestResponsesLeader(event: any) {
    let response = {
      idUser: event.user._id,
      accepted: event.request,
    };

    let message = response.accepted
      ? 'La solicitud ha sido aceptada con exito'
      : 'La solicitud ha sido rechazada con exito';

    this.projectService
      .userRequestResponsesLeader(this.searchProject, response)
      .subscribe({
        next: (data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Hecho',
            detail: message,
          });
          this.spinner = true;
          this.getDetailsProject(this.idParam);
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error ? err.error.message : 'Ups! ocurrio un error',
          });
        },
      });
  }

  invitationProjectPopUp() {
    this.visiblePopUpInvitationProject = true;
  }

  sendMailSuggestProject(mail: MailInvitation) {
    this.projectService.sendMailInvitation(mail).subscribe({
      next: (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Enviado',
          detail: '¡Su sugerencia ha sido enviado con éxito!',
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      },
      complete: () => {
        this.visiblePopUpInvitationProject = false;
      },
    });
  }

  showFinishProjectPopUp() {
    this.visiblePopUpScore = true;
  }

  finishProjectHiddenPopUp(hiddenPopUp: any) {
    this.visiblePopUpScore = !hiddenPopUp;
  }

  finishProject(scores: any) {
    {
      this.projectService
        .finalizeProject(this.searchProject._id, scores)
        .subscribe({
          next: async (data) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Hecho!',
              detail: 'El proyecto fue finalizado con exito',
            });
            this.spinner = true;
            await this.getDetailsProject(this.idParam);
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err.error ? err.error.message : 'Ups! ocurrio un error',
            });
          },
        });
    }
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

  checkUserIfSendRequest() {
    if (this.currentUser && this.searchProject) {
      for (let applicant of this.searchProject.requests) {
        applicant?._id === this.currentUser._id
          ? (this.userExistSendRequest = true)
          : '';
      }
    }
  }
}
