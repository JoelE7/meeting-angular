import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { Post } from 'src/app/shared/models/post/post.class';


@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent {

  searchPost: Post = new Post()

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    let { id } = this.activatedRoute.snapshot.params;

    this.postService.detailsPost(id).subscribe(
      (post) => {
        this.searchPost = post;
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
