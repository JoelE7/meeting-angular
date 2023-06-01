import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map } from 'rxjs';
import { QuestionPreferenceUser } from 'src/app/modules/project/interfaces/questionPreferenceUser.interface';
import { MetricCommit } from 'src/app/modules/user/interfaces/metricCommit.interface';
import { MetricLanguage } from 'src/app/modules/user/interfaces/metricLanguage.interface';
import { User } from 'src/app/shared/models/user/user.class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsersByRanking(paginate: number) {
    return this.http
      .get(`${environment.apiUrl}/users/ranking/${paginate}`, {})
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateUser(user: User) {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http
      .put(`${environment.apiUrl}/users/${user._id}`, user, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updatePreferences(user: User, update: any = {}) {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http
      .put(`${environment.apiUrl}/users/${user._id}`, update, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getLanguagesGithub(username: string): Promise<MetricLanguage[]> {
    return lastValueFrom<MetricLanguage[]>(
      this.http.get<MetricLanguage[]>(
        `${environment.apiUrl}/users/languages/${username}`,
        {}
      )
    );
  }

  getCommitsByUserGithub(username: string): Promise<MetricCommit[]> {
    return lastValueFrom<MetricCommit[]>(
      this.http.get<MetricCommit[]>(
        `${environment.apiUrl}/users/metrics/${username}`,
        {}
      )
    );
  }

  getRecommendationQuestionUser(
    user: User
  ): Observable<QuestionPreferenceUser> {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http
      .post<QuestionPreferenceUser>(
        `${environment.apiUrl}/recommendations/`,
        user,
        {
          headers: headers,
        }
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  // linkUserWithGithub(username: string): Observable<any> {
  //   let headers = new HttpHeaders();
  //   // headers = headers.append(
  //   //   'Authorization',
  //   //   'Bearer' + localStorage.getItem('token')
  //   // );

  //   return this.http
  //     .post<QuestionPreferenceUser>(
  //       `${environment.apiUrl}/recommendations/`,
  //       username,
  //       {
  //         headers: headers,
  //       }
  //     )
  //     .pipe(
  //       map((res: any) => {
  //         return res;
  //       })
  //     );
  // }

  detailsUser(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  detailsUserAsync(id: string): Promise<User> {
    return lastValueFrom<User>(
      this.http.get<User>(`${environment.apiUrl}/users/${id}`, {})
    );
  }
}
