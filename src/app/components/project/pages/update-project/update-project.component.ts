import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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
    private messageService: MessageService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.editProject._id = 1;
    this.editProject.name = 'Jessica';
  }

  updateProject(proyecto: any) {
    console.log('Llego el proyecto desde el form');
  }
}
