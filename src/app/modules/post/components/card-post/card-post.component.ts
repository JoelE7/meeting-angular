import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TechnologiesService } from 'src/app/api/services/data/technologies.service';
import { Post } from 'src/app/shared/models/post/post.class';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class CardPostComponent implements OnInit {
  @Input()
  post: Post= new Post();

  currentUser: User = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : undefined;

  constructor(
    private technologiesService:TechnologiesService
    ){
    
  }

  ngOnInit(): void {

  }

  getIcon(technologie:string){
    return this.technologiesService.getIcon(technologie);
  }

}