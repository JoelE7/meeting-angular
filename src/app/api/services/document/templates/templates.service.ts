import { Injectable } from '@angular/core';
import { Project } from 'src/app/shared/models/project/project.class';
import { User } from 'src/app/shared/models/user/user.class';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService {
  constructor() {}

  downloadCertificate(project: Project, user: User) {
    let html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Certificado ${project.name}</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    </head>
    <body>
      
    </body>
    </html>
    `
    for (let i = 0; i <5; i++) {
      const element = [i];
      html += `${i}`
      
    }

    html = `
    
    `
    
    ;
    return html;
  }
}
