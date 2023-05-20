import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post/post.class';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
  @Input()
  post: Post= new Post();

  ngOnInit(): void {
  }
  
  
} {
  


}
