import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { Post } from 'src/app/shared/models/post/post.class';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent  implements OnInit {

  listPost:Post[]=[];

  constructor(
    private messageService: MessageService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(
      (data) => {
        this.listPost = data;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      }
    );
  }

}
