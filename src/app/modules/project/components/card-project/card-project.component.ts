import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project/project.class';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent implements OnInit {

  @Input()
  project:Project = new Project();

  constructor() {}

  ngOnInit(): void {

  }
}
