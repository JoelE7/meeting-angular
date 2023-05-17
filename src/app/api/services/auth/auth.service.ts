import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from 'src/app/shared/models/user/user.class';
import { enviroment } from 'src/environments/enviroment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  menuVisible = false;

  constructor(private http: HttpClient) {}

  get getMenuVisible() {
    return this.menuVisible;
  }

  loginUser(data: User) {
    return this.http.post(`${enviroment.apiUrl}/users/login`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  registerUser(data: User){
    return this.http.post(`${enviroment.apiUrl}/users`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }


}
