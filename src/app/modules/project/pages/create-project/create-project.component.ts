import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';
import { User } from 'src/app/shared/models/user/user.class';

Component;

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit{
  newProject: Project = new Project();
  spinner = true;

  constructor(
    private projectService: ProjectService,
    private messageService: MessageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.spinner = false;
  }

  createProject(proyecto: Project) {
    this.newProject = proyecto;
    this.projectService.createProject(this.newProject).subscribe({
      next: (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creado',
          detail: '¡El Proyecto fue creado con exito!',
        });
        this.router.navigate(['/project/list-project']);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      },
    });
  }
}
