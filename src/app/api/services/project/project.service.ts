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
}
