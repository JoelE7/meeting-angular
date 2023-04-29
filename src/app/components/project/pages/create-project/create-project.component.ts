import { Component } from '@angular/core';

Component;

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent {


  createProject(proyecto: any) {
    console.log("Llego el proyecto desde el form");
    
  }
}
