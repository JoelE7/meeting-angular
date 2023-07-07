import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { Mail } from 'src/app/shared/models/model-mail-contact/model-mail.interface';
import { MailSuggest } from 'src/app/shared/models/model-mail-suggest/model-mail.interface';
import { Post } from 'src/app/shared/models/post/post.class';
import { User } from 'src/app/shared/models/user/user.class';
import { UserService } from 'src/app/api/services/user/user.service';
import { TechnologiesService } from 'src/app/api/services/data/technologies.service';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsPostComponent {
  searchPost: Post = new Post();
  form: FormGroup;

  visibleModalContact: boolean = false;
  visibleModalSuggest: boolean = false;

  currentUser: User =
    localStorage.getItem('user') != 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : undefined;

  userReceptor: User = new User();

  spinner = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private postService: PostService,
    private userService: UserService,
    private technologiesService:TechnologiesService
  ) {}

  ngOnInit(): void {
    let { id } = this.activatedRoute.snapshot.params;
    this.getDetail(id);
    this.startFrom();
    if (!this.currentUser) {
      this.form.get('comment').disable();
    }
  }

  getIcon(technologie:string){
    return this.technologiesService.getIcon(technologie);
  }

  startFrom() {
    this.form = new FormGroup({
      comment: new FormControl(
        this.currentUser
          ? ''
          : 'Para poder comentar este post, logueate o registrate',
        [Validators.required]
      ),
    });
  }

  getDetail(id: any) {
    this.postService.detailsPost(id).subscribe({
      next: (post) => {
        this.searchPost = post;
        console.log(post);
        
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      },
      complete : ()=>{
        this.spinner = false;
      }
    });
  }

  createMessage() {
    let message = this.form.get('comment').value;
    let comment = {
      author: this.currentUser._id,
      post: this.searchPost._id,
      date: new Date(),
      message: message,
    };

    this.postService.createMessage(comment).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Hecho!',
          detail: 'Tu comentario se envio con exito',
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      },
      complete: () => {
        this.ngOnInit();
      },
    });
  }

  showModalSuggest() {
    if (!this.currentUser) {
      this.messageService.add({
        severity: 'warn',
        detail:
          'Para poder compartir el post a alguien, registrate o inicia sesión',
      });
      return;
    }
    this.visibleModalSuggest = true;
  }
  showModalContact(author: User) {
    if (!this.currentUser) {
      this.messageService.add({
        severity: 'warn',
        detail: `Para poder contactar a ${author.name}, registrate o inicia sesión`,
      });
      return;
    }
    this.userReceptor = author;
    this.visibleModalContact = true;
  }

  sendMailContact(mail: Mail) {
    this.userService.sendMailContact(mail).subscribe({
      next: (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creado',
          detail: '¡Su mensaje ha sido enviado con éxito!',
        });
      },
      error: (err) => {
        this.showMessageError(err);
      },
      complete: () => {
        this.visibleModalContact = false;
      },
    });
  }

  sendMailSuggestPost(mail: MailSuggest) {
    this.postService.sendMailSuggestPost(mail).subscribe({
      next: (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Creado',
          detail: '¡Su sugerencia ha sido enviado con éxito!',
        });
      },
      error: (err) => {
        this.showMessageError(err);
      },
      complete: () => {
        this.visibleModalSuggest = false;
      },
    });
  }

  showMessageError(err: any) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: err.error ? err.error.message : 'Ups! ocurrio un error',
    });
  }
}
