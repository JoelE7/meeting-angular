import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';

@Component({
  selector: 'app-suggestions-project',
  templateUrl: './suggestions-project.component.html',
  styleUrls: ['./suggestions-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SuggestionsProjectComponent implements OnInit {
  suggestions: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (data) => {
        this.suggestions = data;
        
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

  responsiveOptions = [
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '991px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
  ];
}
