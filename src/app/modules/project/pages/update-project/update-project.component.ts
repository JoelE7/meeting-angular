import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UpdateProjectComponent {
  editProject: Project = new Project();

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private messageService: MessageService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    let { id } = this.activatedRouter.snapshot.params;

    this.projectService.detailsProject(id).subscribe(
      (project) => {
        this.editProject = project;
      },
      (err) => {
        console.log(err);
        this.messageService.add({
          key: 'msg',
          severity: 'error',
          summary: 'Error',
          detail: 'Recargue o contacte con el administrador del sistema',
        });
      }
    );
  }

  updateProject(proyecto: Project) {
    this.editProject = proyecto;
    this.projectService.updateProject(this.editProject).subscribe(
      (resp) => {
        this.messageService.add({
          key: 'msg',
          severity: 'success',
          summary: 'Editado',
          detail: '¡El Proyecto fue editado con exito!',
        });
        this.router.navigate(['/list-project']);
      },
      (err) => {
        this.messageService.add({
          key: 'msg',
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      }
    );
  }
}
