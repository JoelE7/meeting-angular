import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { Project } from 'src/app/shared/models/project/project.class';
import { Task } from '../../interfaces/tasks.interface';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
// export class DetailsProjectComponent implements OnInit{
//
//   id:number;
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
export class DetailsProjectComponent {
  profile: []
  tasks: Task[] = [
    {
      numberTask: '1',
      name: 'CRUD de tareas',
      status: 'IN_PROCESS',
      assignedMember: 'Joel',
    },
    {
      numberTask: '2',
      name: 'CRUD de mvp',
      status: 'FINALIZED',
      assignedMember: 'Ezequiel',
    },
    {
      numberTask: '3',
      name: 'CRUD de usuarios',
      status: 'NOTASSIGNED',
    },
  ];

  projectAccept = false;

  searchProject: Project = new Project();

  constructor() {}

  joinAProject() {
    this.projectAccept = true;
  }
}
