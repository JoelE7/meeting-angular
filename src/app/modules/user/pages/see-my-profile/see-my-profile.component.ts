import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { UserService } from 'src/app/api/services/user/user.service';
import { User } from 'src/app/shared/models/user/user.class';
import { MetricLanguage } from '../../interfaces/metricLanguage.interface';
import { MetricCommit } from '../../interfaces/metricCommit.interface';
import { ChartBarData } from 'src/app/shared/models/model-metric/CharBarMetric.interface';
import { ChartDoughnutData } from 'src/app/shared/models/model-metric/DoughnutMetric.interface';
import { MailInvitation } from 'src/app/shared/models/model-mail-invitation/model-mail-invitation.interface';
import { Project } from 'src/app/shared/models/project/project.class';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { TechnologiesService } from 'src/app/api/services/data/technologies.service';

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
  visibleInputGitlab: boolean = false;
  userNameGithub = '';
  userNameGitlab = '';

  languagesMetric: any;
  commitsByUser: any;

  searchUser: User = new User();

  spinnerMetric: boolean = true;
  spinner: boolean = true;

  visibleModalInvitation: boolean = false;
  userReceptor: User = new User();
  newInvitation: MailInvitation;

  id: string;
  idCurrentUser = '';

  activeIndex = 0;

  messages: Message[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserService,
    private projectService: ProjectService,
    private technologiesService: TechnologiesService
  ) {}

  async ngOnInit() {
    let seeProjects = history.state?.seeProjects;
    if (seeProjects) {
      this.activeIndex = 1;
    }

    let { id } = this.activatedRoute.snapshot.params;
    this.id = id;
    this.searchUser = await this.userService.detailsUserAsync(id);

    this.userReceptor = this.searchUser;
    if (this.currentUser) {
      // this.currentUser = await this.userService.detailsUserAsync(
      //   this.currentUser?._id
      // );
      this.idCurrentUser = this.currentUser._id;
    }

    if (this.searchUser?.githubUsername || this.searchUser?.gitlabUsername) {
      this.getLanguagesGithub();
      this.getCommitsByUserGithub();
    }

    this.messages = [
      { severity: 'info', detail: 'No se encontraron proyectos' },
    ];
    this.spinner = false;
  }

  getIcon(technologie: string) {
    return this.technologiesService.getIcon(technologie);
  }

  linkInputUserWithGithub() {
    this.visibleInputGithub = true;
  }

  linkInputUserWithGitlab() {
    this.visibleInputGitlab = true;
  }
  backLinkWithGitlab() {
    this.visibleInputGitlab = false;
  }

  backLinkWithGithub() {
    this.visibleInputGithub = false;
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
        this.ngOnInit();
        this.backLinkWithGithub();
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

  messagErrorGitHubMetrics = '';
  messagErrorGitLabMetrics = '';

  async linkUsertWithGitlab() {
    if (this.userNameGitlab == '') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Coloca tu nombre de usuario de gitlab',
      });
      return;
    }

    await new Promise((resolve, reject) => {
      this.searchUser.gitlabUsername = this.userNameGitlab;
      resolve('');
    });

    this.userService.updateUser(this.searchUser).subscribe(
      async (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Hecho',
          detail: 'Tu usuario fue vinculado exitosamente',
        });
        this.ngOnInit();
        this.backLinkWithGitlab();
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

  githubError: boolean = false;
  gitlabError: boolean = false;
  gitlabCommitError: boolean = false;
  githubCommitError: boolean = false;

  async getLanguagesGithub() {
    this.languagesMetric = await this.userService.getLanguagesGithub(
      this.searchUser._id
    );

    if (this.searchUser.githubUsername) {
      if (this.languagesMetric?.githubLanguages) {
        let languagesGithub = [];
        let quantityRepositoryByLanguageGithub = [];

        this.languagesMetric.githubLanguages.forEach((lang: any) => {
          languagesGithub.push(lang.technology);
          quantityRepositoryByLanguageGithub.push(lang.quantity);
        });

        this.languagesUserGithub = {
          labels: languagesGithub,
          datasets: [
            {
              data: quantityRepositoryByLanguageGithub,
            },
          ],
        };
      } else {
        if (this.languagesMetric?.githubLanguages == false) {
          this.githubError = true;
        }
      }
    }

    if (this.searchUser.gitlabUsername) {
      if (
        this.languagesMetric?.gitlabLanguages
      ) {
        let languagesGitlab = [];
        let quantityRepositoryByLanguageGitlab = [];

        this.languagesMetric.gitlabLanguages.forEach((lang: any) => {
          languagesGitlab.push(lang.technology);
          quantityRepositoryByLanguageGitlab.push(lang.quantity);
        });

        this.languagesUserGitlab = {
          labels: languagesGitlab,
          datasets: [
            {
              data: quantityRepositoryByLanguageGitlab,
            },
          ],
        };
      } else {
        if (this.languagesMetric?.gitlabLanguages == false) {
          this.gitlabError = true;
        }
      }
    }
  }

  async getCommitsByUserGithub() {
    this.commitsByUser = await this.userService.getCommitsByUserGithub(
      this.searchUser._id
    );

    let nameRepositorysGithub = [];
    let commitsGithub = [];

    if (this.commitsByUser) {
      if (this.searchUser?.githubUsername && this.commitsByUser.githubMetrics) {
        this.commitsByUser.githubMetrics.commitCounts.forEach((project) => {
          nameRepositorysGithub.push(project.nameRepository);
          commitsGithub.push(project.quantityCommits);
        });
      } else {
        if (this.commitsByUser.githubMetrics == false) {
          this.githubCommitError = true;
        }
      }

      let nameRepositorysGitlab = [];
      let commitsGitlab = [];

      if (this.searchUser?.gitlabUsername) {
        if (this.commitsByUser?.gitlabMetrics) {
          this.commitsByUser?.gitlabMetrics?.commitCounts.forEach((project) => {
            nameRepositorysGitlab.push(project.nameRepository);
            commitsGitlab.push(project.quantityCommits);
          });
        } else {
          if (this.commitsByUser.gitlabMetrics == false) {
            this.gitlabCommitError = true;
          }
        }
      }

      this.getMetricGrafic(
        nameRepositorysGithub,
        commitsGithub,
        nameRepositorysGitlab,
        commitsGitlab
      );
    } else {
    }

    if(this.githubCommitError && this.githubError){
      this.messagErrorGitHubMetrics = 'El usuario de github no fue encontrado, verifica que sea correcto o actualizalo.';
    }else {
      this.messagErrorGitHubMetrics = ""
    }
    
    if(this.gitlabCommitError && this.gitlabError){
      this.messagErrorGitLabMetrics = 'El usuario de gitlab no fue encontrado, verifica que sea correcto o actualizalo.';
    }else{
      this.messagErrorGitLabMetrics = ""
    }

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
