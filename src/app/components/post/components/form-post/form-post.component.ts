import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/models/post/post.class';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormPostComponent {

  @Input()
  post: Post = new Post();

  @Output()
  emitPost: EventEmitter<Post> = new EventEmitter();

  form: FormGroup;

  newPost: Post= new Post();

  ngOnInit(): void {
    this.startFrom();
    //this.form.get('startDate').disable();
  }
  startFrom() {
    this.form = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required]),
      description: new FormControl(this.post.body, [
        Validators.required,
        Validators.minLength(10),
      ]),
      typePost: new FormControl(this.post.type, [Validators.required]),
      languages: new FormControl(this.post.languages,[Validators.required]),
      technologies: new FormControl(this.post.technologies,[Validators.required]),
    });
  }
   submitProject() {
    this.newPost.title = this.form.get('title').value;
    this.newPost.body = this.form.get('description').value;
    this.newPost.type = this.form.get('typePost').value;
    this.newPost.languages = this.form.get('languages').value;
    this.newPost.technologies = this.form.get('technologies').value;
 
    this.emitPost.emit(this.newPost);
  }
}
