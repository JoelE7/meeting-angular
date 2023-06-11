import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/api/services/user/user.service';
import { User } from 'src/app/shared/models/user/user.class';
import { MetricLanguage } from '../../interfaces/metricLanguage.interface';
import { MetricCommit } from '../../interfaces/metricCommit.interface';
import { ChartBarData } from 'src/app/shared/models/model-metric/CharBarMetric.interface';
import { ChartDoughnutData } from 'src/app/shared/models/model-metric/DoughnutMetric.interface';
import { MailInvitation } from 'src/app/shared/models/model-mail-invitation/model-mail-invitation.interface';
import { Project } from 'src/app/shared/models/project/project.class';
import { ProjectService } from 'src/app/api/services/project/project.service';

@Component({
  selector: 'app-see-my-profile',
  templateUrl: './see-my-profile.component.html',
  styleUrls: ['./see-my-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SeeMyProfileComponent {
  currentUser: User =
    localStorage.getItem('user') != 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : undefined;
  visiblePopUpScore = false;
  visibleInputGithub: boolean = false;
  userNameGithub = '';

  languagesMetric: any;
  commitsByUser: any;

  searchUser: User = new User();

  spinnerMetric: boolean = true;

  visibleModalInvitation: boolean = false;
  userReceptor: User = new User();
  newInvitation: MailInvitation;

  id: string;
  idCurrentUser = '';

  activeIndex = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserService,
    private projectService: ProjectService
  ) {}

  async ngOnInit() {
    let seeProjects = history.state.seeProjects;
    if (seeProjects) {
      this.activeIndex = 1;
    }

    let { id } = this.activatedRoute.snapshot.params;
    this.id = id;
    this.searchUser = await this.userService.detailsUserAsync(id);
    this.userReceptor = this.searchUser;
    this.currentUser = await this.userService.detailsUserAsync(
      this.currentUser._id
    );
    this.idCurrentUser = this.currentUser._id;
    // this.listProjectsUserEmisor = this.currentUser.projects;

    if (this.searchUser.githubUsername) {
      this.getLanguagesGithub();
      this.getCommitsByUserGithub();
    }
  }

  async getDetailsUser(id: any) {
    await new Promise((resolve, reject) => {
      this.userService.detailsUser(id).subscribe(
        (user) => {
          this.searchUser = user;
        },
        (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error ? err.error.message : 'Ups! ocurrio un error',
          });
        }
      );
      resolve('');
    });
  }

  linkInputUserWithGithub() {
    this.visibleInputGithub = true;
  }

  async linkUsertWithGithub() {
    if (this.userNameGithub == '') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Coloca tu nombre de usuario de github',
      });
      return;
    }

    await new Promise((resolve, reject) => {
      this.searchUser.githubUsername = this.userNameGithub;
      resolve('');
    });

    this.userService.updateUser(this.searchUser).subscribe(
      async (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Hecho',
          detail: 'Tu usuario fue vinculado exitosamente',
        });
        await this.getLanguagesGithub();
        await this.getCommitsByUserGithub();
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

  languagesUserGithub: any;
  languagesUserGitlab: any;

  async getLanguagesGithub() {
    this.languagesMetric = await this.userService.getLanguagesGithub(
      this.searchUser._id
    );

    let languagesGithub = [];
    let languagesGitlab = [];
    let quantityRepositoryByLanguageGithub = [];
    let quantityRepositoryByLanguageGitlab = [];

    this.languagesMetric.githubLanguages.forEach((lang: any) => {
      languagesGithub.push(lang.technology);
      quantityRepositoryByLanguageGithub.push(lang.quantity);
    });

    this.languagesMetric.gitlabLanguages.forEach((lang: any) => {
      languagesGitlab.push(lang.technology);
      quantityRepositoryByLanguageGitlab.push(lang.quantity);
    });

    this.languagesMetric.githubLanguages;

    this.languagesUserGithub = {
      labels: languagesGithub,
      datasets: [
        {
          data: quantityRepositoryByLanguageGithub,
        },
      ],
    };

    this.languagesUserGitlab = {
      labels: languagesGitlab,
      datasets: [
        {
          data: quantityRepositoryByLanguageGitlab,
        },
      ],
    };
  }

  async getCommitsByUserGithub() {
    this.commitsByUser = await this.userService.getCommitsByUserGithub(
      this.searchUser._id
    );

    let nameRepositorysGithub = [];
    let commitsGithub = [];

    let nameRepositorysGitlab = [];
    let commitsGitlab = [];

    this.commitsByUser.githubMetrics.commitCounts.forEach((project) => {
      nameRepositorysGithub.push(project.nameRepository);
      commitsGithub.push(project.quantityCommits);
    });

    this.commitsByUser.gitlabMetrics.commitCounts.forEach((project) => {
      nameRepositorysGitlab.push(project.nameRepository);
      commitsGitlab.push(project.quantityCommits);
    });

    this.getMetricGrafic(
      nameRepositorysGithub,
      commitsGithub,
      nameRepositorysGitlab,
      commitsGitlab
    );
    this.getMetricGrafic(nameRepositorysGitlab, commitsGitlab);
    this.spinnerMetric = false;
  }

  repositorysCommitsGithub: ChartBarData;
  repositorysCommitsGitlab: ChartBarData;

  getMetricGrafic(
    nameRepositorysGithub: string[] = [],
    commitsByRepositorysGithub: string[] = [],
    nameRepositorysGitlab: string[] = [],
    commitsRepositorysGitlab: string[] = []
  ) {
    const documentStyle = getComputedStyle(document.documentElement);

    if (
      nameRepositorysGithub.length > 0 &&
      commitsByRepositorysGithub.length > 0
    ) {
      this.repositorysCommitsGithub = {
        labels: nameRepositorysGithub,
        datasets: [
          {
            label: 'Cantidad de commits',
            backgroundColor: documentStyle.getPropertyValue('--purple-300'),
            borderColor: documentStyle.getPropertyValue('--purple-300'),
            data: commitsByRepositorysGithub,
          },
        ],
      };
    }

    if (
      commitsRepositorysGitlab.length > 0 &&
      nameRepositorysGitlab.length > 0
    ) {
      this.repositorysCommitsGitlab = {
        labels: nameRepositorysGitlab,
        datasets: [
          {
            label: 'Cantidad de commits',
            backgroundColor: documentStyle.getPropertyValue('--purple-300'),
            borderColor: documentStyle.getPropertyValue('--purple-300'),
            data: commitsRepositorysGitlab,
          },
        ],
      };
    }
  }

  async showModalInvitation() {
    this.visibleModalInvitation = true;
    this.currentUser = await this.userService.detailsUserAsync(
      this.currentUser._id
    );
    this.idCurrentUser = this.currentUser._id;
  }

  hiddenPopUpInvitation() {
    this.visibleModalInvitation = false;
    this.idCurrentUser = '';
  }

  sendMailInvitation(mail: MailInvitation) {
    this.newInvitation = mail;
    console.log(this.newInvitation);

    this.projectService.sendMailInvitation(this.newInvitation).subscribe(
      (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creado',
          detail: '¡Su invitación ha sido enviado con éxito!',
        });
        this.visibleModalInvitation = false;
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
