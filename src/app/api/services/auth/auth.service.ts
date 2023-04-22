import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  menuVisible = false;

  constructor(private http: HttpClient) {}

  get getMenuVisible() {
    return this.menuVisible;
  }

  login() {
    this.menuVisible = true;
  }
}
