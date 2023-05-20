import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { Post } from 'src/app/shared/models/post/post.class';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css'],
})
export class DetailsPostComponent {
  searchPost: Post = new Post();
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    let { id } = this.activatedRoute.snapshot.params;
    this.getDetail(id);
    this.startFrom();
  }

  startFrom() {
    this.form = new FormGroup({
      comment: new FormControl('', [Validators.required]),
    });
  }

  getDetail(id: any) {
    this.postService.detailsPost(id).subscribe(
      (post) => {
        this.searchPost = post;
        console.log(this.searchPost);
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

  createMessage() {
    let message = this.form.get('comment').value
    let objeto = {
      author: '64584dfc6e91980ca4954f0c',
      post: this.searchPost._id,
      date: new Date(),
      message: message,
    };

    this.postService.createMessage(objeto).subscribe(
      (data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Hecho!',
            detail : "Tu comentario se envio con exito"
          });
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
