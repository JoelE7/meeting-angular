import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { MailSuggest } from 'src/app/shared/models/model-mail-suggest/model-mail.interface';
import { Post } from 'src/app/shared/models/post/post.class';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class DetailsPostComponent {
  searchPost: Post = new Post();
  form: FormGroup;

  idParam;

  visibleModalContact: boolean = false;

  currentUser: User =
    localStorage.getItem('user') != 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : undefined;

  userReceptor: User = new User();

  newSuggest: MailSuggest;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private postService: PostService,
    private router: Router

  ) {}

  ngOnInit(): void {
    let { id } = this.activatedRoute.snapshot.params;
    this.idParam = id;
    this.getDetail(this.idParam);
    this.startFrom();
    if(!this.currentUser){
      this.form.get('comment').disable()
    }
  }

  startFrom() {
    this.form = new FormGroup({
      comment: new FormControl(this.currentUser ? "" : "Para poder comentar este post, logueate o registrate", [Validators.required]),
    });
  }

  getDetail(id: any) {
    this.postService.detailsPost(id).subscribe(
      (post) => {
        this.searchPost = post;
        console.log(post);

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
          this.getDetail(this.idParam)
          this.startFrom();
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

  showModalContact() {
    this.userReceptor = this.userReceptor;
    this.visibleModalContact = true;
  }
  sendMailSuggestPost(mail: MailSuggest) {
    this.newSuggest = mail;
    console.log(this.newSuggest);

    this.postService.sendMailSuggestPost(this.newSuggest).subscribe(
      (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creado',
          detail: '¡Su mensaje ha sido enviado con éxito!',
        });
        this.router.navigate(['post/list-post']);
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

