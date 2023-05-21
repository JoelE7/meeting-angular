import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/shared/models/user/user.class';
import { environment } from 'src/environments/environment';
;

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  login:boolean = false;

  constructor(private http: HttpClient) {}

  setLogin(login:boolean){
    this.login = login;
  }

  get getLogin():boolean{
    return this.login
  }

  loginUser(data: User) {
    return this.http.post(`${environment.apiUrl}/users/login`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  registerUser(data: User){
    return this.http.post(`${environment.apiUrl}/users`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }


}
