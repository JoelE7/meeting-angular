import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { QuestionPreferenceUser } from 'src/app/modules/project/interfaces/questionPreferenceUser.interface';
import { User } from 'src/app/shared/models/user/user.class';
import { enviroment } from 'src/environments/enviroment.prod';

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
      .get(`${enviroment.apiUrl}/users/ranking/${paginate}`, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateUser(user: User, update: any = {}) {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .put(`${enviroment.apiUrl}/users/${user._id}`, update, {
        headers: headers,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getRecommendationQuestionUser(
    user: User
  ): Observable<QuestionPreferenceUser> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .post<QuestionPreferenceUser>(
        `${enviroment.apiUrl}/recommendations/`,
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

  linkProjectWithGithub(url: string): Observable<QuestionPreferenceUser> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .post<QuestionPreferenceUser>(
        `${enviroment.apiUrl}/recommendations/`,
        url,
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

  
//aqui solo hasta string
detailsUser(id:string="64677c466da9143a19e6509d"):Observable<User>{
  let headers = new HttpHeaders();
   // headers = headers.append(
  //   'Authorization',
  //   'Bearer' + localStorage.getItem('token')
  // );
  return this.http
  .get<User>(`${enviroment.apiUrl}/users/${id}`, { headers: headers })
  .pipe(
    map((res: any) => {
      return res;
    })
  );
}


}
