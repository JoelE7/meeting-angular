import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css'],
})
export class CardProjectComponent implements OnInit {
  support: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    if (
      this.activatedRoute.snapshot.routeConfig.path ==
      'list-project-support'
    ) {
      this.support = true;
    }
  }
}
