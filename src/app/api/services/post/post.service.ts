import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Method } from 'src/app/shared/filters/enum/method.enum';
import { FilterService } from 'src/app/shared/filters/services/filter.service';
import { Post } from 'src/app/shared/models/post/post.class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService{
  constructor(private http:HttpClient,private filterService:FilterService){}

  createPost(data: Post) {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
  
    return this.http.post(`${environment.apiUrl}/posts/`, data,{ headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  createMessage(data: any) {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
  
    return this.http.post(`${environment.apiUrl}/messages`, data,{ headers: headers })
    .pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllPost(query: any = [],pagination:number) {
    let filtersAccept = [
      'title',
      'body',
      'type',
      'date',
      'author',
      'messages',
      'technologies'
    ];

    let queryBuild =
      query.method === Method.POST
        ? this.filterService.getFiltersForPost(query, filtersAccept)
        : this.filterService.getFiltersForGet(query, filtersAccept);

    let headers = new HttpHeaders();

    // headers = headers.append(
    //   'Authorization',
    //   'Bearer' + localStorage.getItem('token')
    // );

    return this.http
      .post(`${environment.apiUrl}/posts/filter/${pagination}`,queryBuild, { headers: headers })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  
  detailsPost(id: number): Observable<Post> {
    return this.http
      .get<Post>(`${environment.apiUrl}/posts/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}