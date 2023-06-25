import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TechnologiesService } from 'src/app/api/services/data/technologies.service';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';

@Component({
  selector: 'app-suggestions-project',
  templateUrl: './suggestions-project.component.html',
  styleUrls: ['./suggestions-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SuggestionsProjectComponent implements OnInit {

  @Input()
  suggestions: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private messageService: MessageService,
    private technologiesService:TechnologiesService
  ) {}

  ngOnInit(): void {
  }

  responsiveOptions = [
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '991px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
  ];

  getIcon(technologie:string){
    return this.technologiesService.getIcon(technologie);
  }
}
