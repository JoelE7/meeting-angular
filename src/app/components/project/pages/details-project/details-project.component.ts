import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
// export class DetailsProjectComponent implements OnInit{
//
//   id:number;
//   searchProject:Project = new Project();
//
//   constructor(private projectService:ProjectService,private activatedRoute:ActivatedRoute){
//
//   }
//
//   ngOnInit(): void {
//     let {id} = this.activatedRoute.snapshot.params
//
//     this.projectService.detailsProject(id).subscribe((project)=>{
//       this.searchProject = project;
//     },(err)=>{
//       console.log(err);
//     })
//   }
//
// }
export class DetailsProjectComponent{

  constructor(){

  }
}
