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
      <div class="container">
        <div id="htmlData" class="row">
          <div class="d-flex text-center" style="padding: 30px 100px 20px 100px">      
            <img src="https://github.com/JoelE7/meeting-angular/blob/desa/src/assets/img/logo-final.png?raw=true" alt="" width="70" height="100" />
            <p
              class="fw-bold d-flex justify-content-end align-items-end"
              style="margin-bottom: 3px !important"
            >
              M E E T I N G
            </p>
          </div>
            <h1
            style="font-size: 75px; text-align: center; padding: 50px 0"
            class="h-25"
          >
            Certificado de Finalización
          </h1>
      
          <div class="col-12 col-md-12 col-md-12 col-lg-12">
            <h5 class="text-center">Concedido a:</h5>
            <h2 class="text-center">${user.name}</h2>
      
            <p class="text-center">
              por completar con éxito su proyecto
              <strong>"${project.name}"</strong> el dia 16 de junio de 2023.
            </p>
      
            <p class="text-center">
              Modalidad a distancia, con una carga mensual de 5 meses.
            </p>
          </div>
          <div class="col-12 col-md-12 col-md-12 col-lg-12 text-center">
            <img src="assets/medalla.jpg" alt="" width="70" height="100" />
          </div>
                                    <!-- seccion firma -->
          <div class="container">
            <div class="d-flex align-items-end flex-column my-5">
              <div class="mb-auto p-0 text-center">
                  <img src="assets/img/firma2.jpg" alt="" width="150" height="100" />
              </div>
              <div
                  class="border-dark border-3 border-top mb-5 w-25 text-center"
                  id="line"
                >
                  Ezequiel Sanson CEO de Meeting
              </div>
            </div>
          </div>
                                        <!-- seccion firma -->
        </div>
      </div>
    </body>
    </html>
    `;
    // for (let i = 0; i <5; i++) {
    //   const element = [i];
    //   html += `${i}`

    // }

    // html = `
    
    // `;
    return html;
  }
}
