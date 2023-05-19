import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Project } from 'src/app/shared/models/project/project.class';
import { enviroment } from 'src/environments/enviroment.prod';
import { Method } from '../../../shared/filters/enum/method.enum';
import { FilterService } from 'src/app/shared/filters/services/filter.service';

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

    let queryBuild =
      query.method === Method.POST
        ? this.filterService.getFiltersForPost(query, filtersAccept)
        : this.filterService.getFiltersForGet(query, filtersAccept);

    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer' + localStorage.getItem('token')
    );

    return this.http
      .post(`${enviroment.apiUrl}/projects/filter`,queryBuild ,{
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
