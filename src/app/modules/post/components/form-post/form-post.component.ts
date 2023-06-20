import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/api/services/data/data.service';
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

  newPost: Post = new Post();

  @Input()
  user: User = new User();

  technologies: Item[] = [];

  modeCodeBlock = false;

  editor: string = '';

  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getTechnologies();
    this.startFrom();
  }

  changeModeCodeBlock() {
    this.modeCodeBlock = !this.modeCodeBlock;
  }

  textChange(event) {
    // let inner = document.getElementById('inner')
    // inner.innerHTML = event.htmlValue
    this.editor = event.htmlValue;
    console.log(event);
    
  //   const regex =
  //   /<pre class="ql-syntax" spellcheck="false">([\s\S]*?)<\/pre>/g;
  // const htmlContent = event.htmlValue;
  // let htmlCode = '';

  // let match;
  // while ((match = regex.exec(htmlContent)) !== null) {
  //   const codeBlock = match[1];
  //   const div = document.createElement('div');
  //   div.innerHTML = codeBlock;
  //   htmlCode += div.textContent || div.innerText;
  // }
  // this.editor = htmlCode;
  // console.log(htmlCode);

    // if (this.modeCodeBlock) {
    //   const regex =
    //     /<pre class="ql-syntax" spellcheck="false">([\s\S]*?)<\/pre>/g;
    //   const htmlContent = event.htmlValue;
    //   let htmlCode = '';

    //   let match;
    //   while ((match = regex.exec(htmlContent)) !== null) {
    //     const codeBlock = match[1];
    //     const div = document.createElement('div');
    //     div.innerHTML = codeBlock;
    //     htmlCode += div.textContent || div.innerText;
    //   }
    //   this.editor = htmlCode;
    //   console.log(htmlCode);
      
    // } else {
    //   this.editor = event.textValue;
    // }
  }

  getTechnologies() {
    this.dataService.getTechnologies().subscribe({
      next: (data) => {
        for (let i = 0; i < data.technologies.length; i++) {
          this.technologies.push({
            label: data.technologies[i],
            value: data.technologies[i],
          });
        }
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      },
    });
  }

  startFrom() {
    this.form = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required]),
      body: new FormControl(this.post.body, [
        Validators.required,
        Validators.minLength(10),
      ]),
      project: new FormControl(this.post.project, []),
      technologies: new FormControl(this.post.technologies, [
        Validators.required,
      ]),
    });
  }

  submitPost() {
    this.newPost.title = this.form.get('title').value;
    this.newPost.body = this.editor;
    this.newPost.project = this.form.get('project').value?._id;
    this.newPost.date = new Date();
    this.newPost.author = this.user._id;
    this.newPost.technologies = this.form.get('technologies').value;

    this.emitPost.emit(this.newPost);
  }
}
