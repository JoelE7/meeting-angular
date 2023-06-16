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

  project: Project;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private messageService: MessageService,
    private projectService: ProjectService
  ) {}

  async ngOnInit(): Promise<void> {
    let { id } = this.activatedRouter.snapshot.params;
    await this.getDetailsProject(id);
  }

  async getDetailsProject(id: string) {
    this.project = await this.projectService.detailsProjectAsync(id);
    if(!this.project){
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Recargue o contacte con el administrador del sistema',
      });
    }
  }

  updateProject(project: Project) {
    project._id = this.project._id;
    this.projectService.updateProject(project).subscribe(
      (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Actualizado',
          detail: '¡El Proyecto fue actualizado con exito!',
        });
        this.router.navigate(['/project/details-project/' + this.project._id]);
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      }
    );
  }
}
