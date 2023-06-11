import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map } from 'rxjs';
import { Project } from 'src/app/shared/models/project/project.class';
import { environment } from 'src/environments/environment';
import { Method } from '../../../shared/filters/enum/method.enum';
import { FilterService } from 'src/app/shared/filters/services/filter.service';
import { User } from 'src/app/shared/models/user/user.class';
import { MetricProject } from 'src/app/modules/project/interfaces/metricProject.interface';
import { MailInvitation } from 'src/app/shared/models/model-mail-invitation/model-mail-invitation.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient, private filterService: FilterService) {}

  detailsProject(id: number): Observable<Project> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .get<Project>(`${environment.apiUrl}/projects/${id}`, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  detailsProjectAsync(id: string): Promise<Project> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return lastValueFrom<Project>(
      this.http.get<Project>(`${environment.apiUrl}/projects/${id}`, {
        headers: headers,
      })
    );
  }

  createProject(data: Project) {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    return this.http
      .post(`${environment.apiUrl}/projects/`, data, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateProject(project: Project) {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    return this.http
      .put(`${environment.apiUrl}/projects/${project._id}`, project, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getAllProjects(query: any = [],paginate: any,currentUser:boolean) {
    let filtersAccept = [
      'name',
      'description',
      'type',
      'complexity',
      'amountParticipants',
      'leaderId',
      'startDate',
      'endDate',
      'participantsId',
      'languages',
      'technologies',
      'status',
      'requestSupport',
    ];

    let queryBuild =
      query.method === Method.POST
        ? this.filterService.getFiltersForPost(query, filtersAccept)
        : this.filterService.getFiltersForGet(query, filtersAccept);

    let headers = new HttpHeaders();
    if(currentUser){
      headers = headers.append(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      );
    }


    return this.http
      .post(`${environment.apiUrl}/projects/filter/${paginate}`, queryBuild, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getSuggestedProjects(user: User = new User()) {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .post(`${environment.apiUrl}/projects/suggestions`, user, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  finalizeProject(idProject: string, scores: any) {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer' + localStorage.getItem('token')
    );

    return this.http
      .post(`${environment.apiUrl}/projects/finish/${idProject}`, scores, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getMetricByProject(idProject: string): Promise<any> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return lastValueFrom<any>(
      this.http.get<any>(
        `${environment.apiUrl}/projects/getMetrics/${idProject}`,
        {
          headers: headers,
        }
      )
    );
  }

  joinProject(userId:string,projectId:string,supportRequired:boolean = false){

    let data = {
      userId,
      projectId,
      support : supportRequired
    }

    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http
      .post(`${environment.apiUrl}/projects/join/`, data, {
        headers: headers, observe : 'response'
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }


  sendMailInvitation(data:MailInvitation){
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

  // api/projects/invite

    return this.http
      .post<Project>(`${environment.apiUrl}/projects/invite`, data, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
