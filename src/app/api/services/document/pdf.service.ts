import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http:HttpClient) { }


  downloadCertificate(html:any) {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this.http
      .post(
        `${environment.apiUrl}/projects/download`,
        {html},
        { headers: headers, responseType: "blob" }
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  dowload(html:any){
    let headers = new HttpHeaders();
    // headers = headers.append(
    //   'Authorization',
    //   'Bearer ' + localStorage.getItem('token')
    // );

    return this.http
      .get(
        'assets/pdf/certificado.pdf',
        { headers: headers, responseType: "blob" }
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

}
