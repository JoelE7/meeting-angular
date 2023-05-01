import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Task } from '../../interfaces/tasks.interface';

@Component({
  selector: 'app-table-task-list',
  templateUrl: './table-task-list.component.html',
  styleUrls: ['./table-task-list.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class TableTaskListComponent{

  @Input()
  tasks:Task[] = [];

  totalRecords = 3;
  size = 1
  page = 1

  paginate(event){
    this.page = event.page + 1;
    this.size = event.rows;
  }

}
