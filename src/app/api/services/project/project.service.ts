import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Project } from 'src/app/shared/models/project/project.class';
import { enviroment } from 'src/environments/enviroment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  detailsProject(id: number): Observable<Project> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .get<Project>(`${enviroment.apiUrl}/projects/${id}`, { headers: headers })
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
      .post(`${enviroment.apiUrl}/projects/`, data, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateProject(data: Project) {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );
    return this.http
      .post(`${enviroment.apiUrl}/projects/update`, data, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

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

    let queryBuild = {};
    query.forEach((q) => {
      if (filtersAccept.find((element) => element === q.col)) {
        queryBuild[q.col] = q.value;
      }
    });

    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .post(`${enviroment.apiUrl}/projects/filter`, queryBuild, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
