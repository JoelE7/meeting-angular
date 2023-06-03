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

  currentUser: User = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : undefined;
  random: number=0;

  ngOnInit(): void {
    while(this.random == 0||this.random == 3){
      this.random =Math.floor(Math.random() * 8);

    }
    this.post["random"]=this.random;

  }
}