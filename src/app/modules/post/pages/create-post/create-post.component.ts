import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { Post } from 'src/app/shared/models/post/post.class';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'], 
  encapsulation : ViewEncapsulation.None
})
export class CreatePostComponent  {
  newPost: Post= new Post();

 constructor(
  private postService: PostService,
  private messageService: MessageService,
  private router: Router
) {}



createPost(post: Post) {
  this.newPost = post;
 
  this.postService.createPost(this.newPost).subscribe(
    (resp) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Creado',
        detail: '¡El post fue creado con exito!',
      });
      this.router.navigate(['/post/list-post']);
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


