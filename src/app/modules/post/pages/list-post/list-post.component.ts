import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { FilterEnum } from 'src/app/shared/filters/enum/filters.enum';
import { Method } from 'src/app/shared/filters/enum/method.enum';
import { Filters } from 'src/app/shared/filters/interface/filters.interface';
import { Post } from 'src/app/shared/models/post/post.class';
import { FilterService } from 'src/app/shared/filters/services/filter.service';
import { User } from 'src/app/shared/models/user/user.class';
import { Item } from 'src/app/shared/models/model-forms/item-form.interface';
import { DataService } from 'src/app/api/services/data/data.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css'],
})
export class ListPostComponent implements OnInit {

  currentUser: User = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : undefined;  listPost: Post[] = [];
 
  spinner = true;

  paginate: any = 1;

  totalRecords = 0;

  size = 10;

  technologies: Item[] = [];

  query: any = [];
  filters: Filters = {
    autoSend: false,
    method: Method.POST,
    filtersCustom: [
     
      {
        type: FilterEnum.MULTISELECT,
        col: 'col-12 m-0 p-0',
        title: 'Tecnologías',
        nameFilter: 'technologies',
        valueFilter: '',
        items: {
          label: 'label',
          value: 'value',
          search : true,
          items: this.technologies
        },
      },
    ],
  };

  constructor(
    private messageService: MessageService,
    private postService: PostService,
    private filtersService: FilterService,
    private dataService: DataService

  ) {}

  ngOnInit(): void {
    this.getTechnologies();
    this.getAllPosts();
  }

  getTechnologies() {
    this.dataService.getTechnologies().subscribe(
      (data) => {
        for(let i = 0; i < data.technologies.length; i++){
          this.technologies.push({"label" : data.technologies[i],value : data.technologies[i]})
        }
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

  getAllPosts() {
       this.postService.getAllPost(this.query,this.paginate).subscribe(
      (data) => {
        console.log(data);
        
        this.listPost = data.results;
        this.totalRecords = data.count
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

  paginatePosts(event){
    this.paginate = event.page + 1;
    this.size = event.rows;
    this.getAllPosts();
  }
}
