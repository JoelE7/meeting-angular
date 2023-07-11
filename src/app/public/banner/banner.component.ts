import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PdfService } from 'src/app/api/services/document/pdf.service';
import { TemplatesService } from 'src/app/api/services/document/templates/templates.service';
import { Project } from 'src/app/shared/models/project/project.class';
import { User } from 'src/app/shared/models/user/user.class';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent {

  currentUser: User =
  localStorage.getItem('user') != 'undefined'
    ? JSON.parse(localStorage.getItem('user'))
    : undefined;

  @Input()
  title: string = ' ';

  @Input()
  subtitle: string = '';

  @Input()
  short: boolean = false;

  @Input()
  roleUser: string = '';

  @Input()
  updateProject: boolean = false;

  @Input()
  project:Project;

  spinnerPdf = false;

  constructor(private templateService:TemplatesService,private pdfService:PdfService,private messageService:MessageService,private http:HttpClient){

  }

  generatePdf(){ 
    this.spinnerPdf = true;
    const filePath = '/assets/pdf/certificado.pdf';
    this.http.get(filePath, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const downloadURL = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'certificado-meeting.pdf';
      link.click();
      URL.revokeObjectURL(downloadURL);
      this.spinnerPdf = false;
    });


    // this.pdfService.downloadCertificate(this.templateService.downloadCertificate(this.project,this.currentUser,this.selectPdfAccordingToRole())).subscribe({
    //   next : (data)=>{
    //     let dowload = URL.createObjectURL(data);
    //     var link = document.createElement("a");
    //     link.href = dowload;
    //     link.download = `Certificado proyecto - ${this.project.name}`;
    //     link.click();
    //     this.spinnerPdf = false;

    //   },
    //   error : (err)=>{
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Error',
    //       detail: err.error ? err.error.message : 'Ups! ocurrio un error',
    //     });
    //   }
    // })
  }

  selectPdfAccordingToRole(){
    let rol = "";
    switch (this.roleUser) {
      case "leader":
        rol = "Lider"
        break;
      case "participant":
        rol = "Participante"
        break;
      case "support":
        rol = "Soporte"
        break;
      default:
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ups! ocurrio un error',
        });
        break;
    }
    return rol;
  }


}
