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

// interface City {
//   name: string,
//   code: string
// }

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
      label:"informativo", 
      value:"informative"
    },
    {
      label:"colaborativo", 
      value:"collaborative"
    },
   ]
  //  cities: City[];

  //  selectedCities: City[];

  
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
  

  ngOnInit(): void {  
    this.startFrom();
  //   this.cities = [
  //     { name: 'New York', code: 'NY' },
  //     { name: 'Rome', code: 'RM' },
  //     { name: 'London', code: 'LDN' },
  //     { name: 'Istanbul', code: 'IST' },
  //     { name: 'Paris', code: 'PRS' }
  // ];
  }  
  
  startFrom() {
    this.form = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required]),
      body: new FormControl(this.post.body, [
        Validators.required,
        Validators.minLength(10),
      ]),
      type: new FormControl(this.post.type, [Validators.required]),
      languages: new FormControl(this.post.languages,[Validators.required]),
      technologies: new FormControl(this.post.technologies,[Validators.required]),
    });
  }
   submitPost(){
    console.log("pasaron todas las validaciones");
    this.newPost.title = this.form.get('title').value;
    this.newPost.body = this.form.get('body').value;
    this.newPost.type = this.form.get('type').value;
    this.newPost.date = new Date();
    this.newPost.author= new User();
    this.newPost.author._id="6445c859e5c80b2eec56cc77"
    // this.newPost.languages = this.form.get('languages').value;
    // this.newPost.technologies = this.form.get('technologies').value;

    this.emitPost.emit(this.newPost);
  }
}
