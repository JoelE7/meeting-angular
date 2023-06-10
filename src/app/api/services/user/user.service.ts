import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map } from 'rxjs';
import { QuestionPreferenceUser } from 'src/app/modules/project/interfaces/questionPreferenceUser.interface';
import { MetricCommit } from 'src/app/modules/user/interfaces/metricCommit.interface';
import { MetricLanguage } from 'src/app/modules/user/interfaces/metricLanguage.interface';
import { Mail } from 'src/app/shared/models/model-mail-contact/model-mail.interface';
import { User } from 'src/app/shared/models/user/user.class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsersByRanking(paginate: number) {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .get(`${environment.apiUrl}/users/ranking/${paginate}`, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getAllUser() {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .post(`${environment.apiUrl}/users/find`,{} ,{
        headers: headers,
      })
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
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return lastValueFrom<MetricLanguage[]>(
      this.http.get<MetricLanguage[]>(
        `${environment.apiUrl}/users/languages/${username}`,
        {
          headers: headers,
        }
      )
    );
  }

  getCommitsByUserGithub(username: string): Promise<MetricCommit[]> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return lastValueFrom<MetricCommit[]>(
      this.http.get<MetricCommit[]>(
        `${environment.apiUrl}/users/metrics/${username}`,
        {
          headers: headers,
        }
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

  linkUserWithGithub(username: string): Observable<any> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .post<QuestionPreferenceUser>(
        `${environment.apiUrl}/recommendations/`,
        username,
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

  detailsUser(id: string): Observable<User> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );
    return this.http
      .get<User>(`${environment.apiUrl}/users/${id}`, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  detailsUserAsync(id: string): Promise<User> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );
    return lastValueFrom<User>(
      this.http.get<User>(`${environment.apiUrl}/users/${id}`, {
        headers: headers,
      })
    );
  }

  sendMailContact(data: Mail) {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    // /api/users/contact
    return this.http
      .post<User>(`${environment.apiUrl}/users/contact`, data, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
