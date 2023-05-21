import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Project } from 'src/app/shared/models/project/project.class';
import { environment } from 'src/environments/environment';
import { Method } from '../../../shared/filters/enum/method.enum';
import { FilterService } from 'src/app/shared/filters/services/filter.service';
import { User } from 'src/app/shared/models/user/user.class';

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
      .get<Project>(`${environment.apiUrl}/projects/${id}`, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  createProject(data: Project) {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );
    return this.http
      .post(`${environment.apiUrl}/projects/`, data, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateProject(project: Project) {
    console.log(project);
    
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );
    return this.http
      .put(`${environment.apiUrl}/projects/${project._id}`, project, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  //TODO: REVISAR ESTO, LA ENTIDAD CAMBIO
  getAllProjects(query: any = []) {
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

    console.log(query);

    let queryBuild =
      query.method === Method.POST
        ? this.filterService.getFiltersForPost(query, filtersAccept)
        : this.filterService.getFiltersForGet(query, filtersAccept);

    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .post(`${environment.apiUrl}/projects/filter`, queryBuild, {
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
    console.log(scores);
    
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

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

}
