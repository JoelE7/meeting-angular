import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { Item } from 'src/app/shared/models/model-forms/item-form.interface';
import { Post } from 'src/app/shared/models/post/post.class';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'], 
  encapsulation : ViewEncapsulation.None
})
export class CreatePostComponent implements OnInit {
 
 newPost: Post= new Post();
 form: FormGroup;
 type:Item[] = [
  {
    label:"informativo", 
    value:"informative"
  },
  {
    label:"colaborativo", 
    value:"collaborative"
  },
 ]
 languages: Item[] = [
  {
    label:"java", 
    value:"java"
  },
  {
    label:"php", 
    value:"php"
  },
  {
    label:"javascript", 
    value:"javascript"
  },
  {
    label:"go", 
    value:"go"
  },{
    label:"kotlin", 
    value:"kotlin"
  }
 ]
 technologies: Item[] = [
  {
    label:"Angular", 
    value:"Angular"
  },
  {
    label:"React", 
    value:"React"
  },
  {
    label:"Vue", 
    value:"Vue"
  },
  {
    label:"Svelte", 
    value:"Svelte"
  }
]

 constructor(
  private postService: PostService,
  private messageService: MessageService,
  private router: Router
) {}

ngOnInit(): void {
  this.form = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    type:new FormControl('', Validators.required),
    languages:new FormControl('', Validators.required),
    technologies:new FormControl('', Validators.required),
  });
}
post():void{
  console.log("pasaron todas las validaciones");
  this.newPost.title = this.form.get('title').value;
  this.newPost.body = this.form.get('body').value;
  this.newPost.type = this.form.get('type').value;
  this.newPost.date = new Date();
  this.newPost.author= new User();
  this.newPost.author._id="6445c859e5c80b2eec56cc77"
  // this.newPost.languages = this.form.get('languages').value;
  // this.newPost.technologies = this.form.get('technologies').value;

  this.postService.createPost(this.newPost).subscribe(
    (resp) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Creado',
        detail: '¡El post fue creado con exito!',
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
createPost(post: Post) {
  this.newPost = post;
 
}

}
