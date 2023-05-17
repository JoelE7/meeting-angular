import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/shared/models/post/post.class';
import { enviroment } from 'src/environments/enviroment.prod';

@Injectable({
  providedIn: 'root',
})
export class PostService{
  constructor(private http:HttpClient){}

  createPost(data: Post) {
    let headers = new HttpHeaders();
  
    return this.http.post(`${enviroment.apiUrl}/posts/`, data,{ headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllPost() {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .get(`${enviroment.apiUrl}/posts`, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  
  detailsPost(id: number): Observable<Post> {
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .get<Post>(`${enviroment.apiUrl}/posts/${id}`, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}