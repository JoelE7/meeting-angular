import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';
import { Task } from '../../interfaces/tasks.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsProjectComponent implements OnInit {
  profile: [];

  projectAccept = false;

  searchProject: Project = new Project();

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    let { id } = this.activatedRoute.snapshot.params;

    this.projectService.detailsProject(id).subscribe(
      (project) => {
        this.searchProject = project;
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

  joinAProject() {
    this.projectAccept = true;
  }
}
