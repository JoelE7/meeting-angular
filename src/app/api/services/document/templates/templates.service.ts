import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Project } from 'src/app/shared/models/project/project.class';
import { User } from 'src/app/shared/models/user/user.class';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService {
  constructor(private date:DatePipe) {}

  downloadCertificate(project: Project, user: User, rol: string) {
    let html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Certificado ${project.name}</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
      crossorigin="anonymous"></script>
    </head>
    <body>
    <style>
    .logo{
      display: flex;
      align-items: center;
      padding: 30px 100px 20px 100px;
    }
    .fuente{
      font-weight: bold;
      justify-content: end;
      align-items: end;
      margin-bottom: 3px !important
    }
    h1{
      font-size: 75px;
      text-align: center;
      padding: 50px 0";
    }
    img{
      text-align: center;
    }
    #line{
      padding: 50px 0";
      border-top:2px solid #000;
     
    }
</style>
      <div class="container">
        <div id="htmlData" class="row">
          <div class="logo text-center ">      
            <img src="https://github.com/JoelE7/meeting-angular/blob/desa/src/assets/img/logo-final.png?raw=true" alt="" width="70" height="100" />
            <p
              class="fuente"
            >
              M E E T I N G
            </p>
          </div>
            <h1
            class="h-25"
          >
            Certificado de Finalización
          </h1>
      
          <div class="col-12 col-md-12 col-md-12 col-lg-12">
            <h5 class="text-center">Concedido a:</h5>
            <h2 class="text-center">${user.name}</h2>
      
            <p class="text-center">
              por completar con éxito como ${rol} su proyecto 
              <strong>"${project.name}"</strong> el dia ${this.date.transform(project.endDate, 'dd/MM/yyyy')}
            </p>
      
            <p class="text-center">
              Modalidad a distancia, con una carga mensual de 5 meses.
            </p>
          </div>
          <div class="col-12 col-md-12 col-md-12 col-lg-12 text-center">
            <img src="https://github.com/JoelE7/meeting-angular/blob/desa/src/assets/img/medalla.jpg?raw=true" alt="" width="70" height="100" />
          </div>
                                    <!-- seccion firma -->
          <div class="container">
            <div class="d-flex align-items-end flex-column my-5">
                  <img src="https://github.com/JoelE7/meeting-angular/blob/desa/src/assets/img/firma2.jpg?raw=true" alt="" width="150" height="100" />
              <div
                  class="mb-5  w-25 text-center text-secondary"
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
