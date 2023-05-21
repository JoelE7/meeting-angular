import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { FilterEnum } from 'src/app/shared/filters/enum/filters.enum';
import { Method } from 'src/app/shared/filters/enum/method.enum';
import { Filters } from 'src/app/shared/filters/interface/filters.interface';
import { Post } from 'src/app/shared/models/post/post.class';
import { FilterService } from '../../../../shared/filters/services/filter.service';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css'],
})
export class ListPostComponent implements OnInit {

  currentUser: User = JSON.parse(localStorage.getItem('user')) || undefined;
  listPost: Post[] = [];

  query: any = [];

  title: string = 'General';

  spinner = true;

  filters: Filters = {
    autoSend: false,
    method: Method.POST,
    filtersCustom: [
      {
        type: FilterEnum.DROPDOWN,
        col: 'col-12 m-0 p-0',
        title: 'Tipo de post',
        nameFilter: 'type',
        valueFilter: '',
        items: {
          label: 'label',
          value: 'value',
          items: [
            {
              label: 'Informativo',
              value: 'informative',
            },
            {
              label: 'Colaborativo',
              value: 'collaborative',
            },
          ],
        },
      },
      {
        type: FilterEnum.CHECKBOX,
        col: 'col-12 mt-3 mt-md-2',
        title: 'Tecnologías',
        nameFilter: 'technologies',
        valueFilter: '',
        checkboxItems: {
          column: false,
          items: [
            {
              label: 'Angular',
              value: 'Angular',
            },
            {
              label: 'React',
              value: 'React',
            },
            {
              label: 'Vue',
              value: 'Vue',
            },
            {
              label: 'Spring',
              value: 'Spring',
            },
            {
              label: 'Node.js',
              value: 'Nodejs',
            },
            {
              label: 'Javascript',
              value: 'Javascript',
            },
            {
              label: 'Java',
              value: 'Java',
            },
            {
              label: 'Python',
              value: 'python',
            },
            {
              label: 'C',
              value: 'c',
            },
            {
              label: 'Typescript',
              value: 'typescript',
            },
          ],
        },
      },
    ],
  };

  constructor(
    private messageService: MessageService,
    private postService: PostService,
    private filtersService: FilterService
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    let { value } = this.query[0] || [];
    if( value ){
      this.title = value == "informative" ? "Informativo" : "Colaborativo";
    } else{
      this.title="General"
    }
    this.postService.getAllPost(this.query).subscribe(
      (data) => {
        this.listPost = data;
        this.spinner = false;
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

  getFilters() {
    this.query = this.filtersService.getFilters();
    this.query.method = this.filters.method;
    this.spinner = true;
    this.getAllPosts();
  }
}
