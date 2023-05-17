import { Component, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post/post.class';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {
  
@Input()
post: Post= new Post();

}
