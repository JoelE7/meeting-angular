import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/app/shared/models/model-forms/item-form.interface';
import { Post } from 'src/app/shared/models/post/post.class';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormPostComponent implements OnInit {

  @Input()
  post: Post = new Post();

  @Output()
  emitPost: EventEmitter<Post> = new EventEmitter();

  form: FormGroup;

  newPost: Post= new Post();

  type:Item[] = [
    {
      label:"Informativo", 
      value:"informative"
    },
    {
      label:"Colaborativo", 
      value:"collaborative"
    },
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
    },{
      label:"Java", 
      value:"Java"
    },{
      label:"Php", 
      value:"Php"
    },{
      label:"Javascript", 
      value:"Javascript"
    },{
      label:"Go", 
      value:"Go"
    },{
      label:"Kotlin", 
      value:"Kotlin"
    },{
      label:"Node.js", 
      value:"Nodejs"
    }

  ]
  

  ngOnInit(): void {  
    this.startFrom();
  }  
  
  startFrom() {
    this.form = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required]),
      body: new FormControl(this.post.body, [
        Validators.required,
        Validators.minLength(10),
      ]),
      type: new FormControl(this.post.type, [Validators.required]),
      technologie: new FormControl(this.post.technologies,[Validators.required]),
    });
  }
   submitPost(){
    console.log("pasaron todas las validaciones");
    this.newPost.title = this.form.get('title').value;
    this.newPost.body = this.form.get('body').value;
    this.newPost.type = this.form.get('type').value;
    this.newPost.date = new Date();
    // this.newPost.author= new User();
    this.newPost.author="64584dfc6e91980ca4954f0c"
    this.newPost.technologies = this.form.get('technologie').value;

    this.emitPost.emit(this.newPost);
    console.log(this.newPost);

  }
}