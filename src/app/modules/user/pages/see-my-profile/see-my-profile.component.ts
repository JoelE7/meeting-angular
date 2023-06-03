import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/api/services/user/user.service';
import { User } from 'src/app/shared/models/user/user.class';
import { MetricLanguage } from '../../interfaces/metricLanguage.interface';
import { MetricCommit } from '../../interfaces/metricCommit.interface';
import { ChartBarData } from 'src/app/shared/models/model-metric/CharBarMetric.interface';
import { ChartDoughnutData } from 'src/app/shared/models/model-metric/DoughnutMetric.interface';

@Component({
  selector: 'app-see-my-profile',
  templateUrl: './see-my-profile.component.html',
  styleUrls: ['./see-my-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SeeMyProfileComponent {
  currentUser: User = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : undefined;
  visiblePopUpScore = false;
  visibleInputGithub: boolean = false;
  userNameGithub = '';

  languagesMetric: MetricLanguage[];
  commitsByUser: MetricCommit[];

  searchUser: User = new User();

  spinnerMetric: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    let { id } = this.activatedRoute.snapshot.params;
    this.searchUser = await this.userService.detailsUserAsync(id);

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

  languagesUser: ChartDoughnutData;

  async getLanguagesGithub() {
    this.languagesMetric = await this.userService.getLanguagesGithub(
      this.searchUser.githubUsername
    );

    let languages = [];
    let quantityRepositoryByLanguage = [];

    this.languagesMetric.forEach((lang: MetricLanguage) => {
      languages.push(lang.technology);
      quantityRepositoryByLanguage.push(lang.quantity);
    });

    this.languagesUser = {
      labels: languages,
      datasets: [
        {
          data: quantityRepositoryByLanguage,
        },
      ],
    };
    console.log(this.languagesUser);
  }

  async getCommitsByUserGithub() {
    this.commitsByUser = await this.userService.getCommitsByUserGithub(
      this.searchUser.githubUsername
    );

    let nameRepositorys = [];
    let commits = [];

    this.commitsByUser.forEach((metric) => {
      metric.commits.forEach((commit) => {
        nameRepositorys.push(commit.nameRepository);
        commits.push(commit.quantityCommits);
      });
    });
    this.getMetricGrafic(nameRepositorys, commits);
    this.spinnerMetric = false;
  }

  repositorysCommits: ChartBarData;

  getMetricGrafic(nameRepositorys: string[], commitsByRepository: string[]) {
    const documentStyle = getComputedStyle(document.documentElement);

    this.repositorysCommits = {
      labels: nameRepositorys,
      datasets: [
        {
          label: 'Cantidad de commits',
          backgroundColor: documentStyle.getPropertyValue('--purple-300'),
          borderColor: documentStyle.getPropertyValue('--purple-300'),
          data: commitsByRepository,
        },
      ],
    };
  }
}
