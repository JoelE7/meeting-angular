import { Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-project-member',
  templateUrl: './project-member.component.html',
  styleUrls: ['./project-member.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ProjectMemberComponent implements OnInit,DoCheck{

  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }

  @Input()
  user:User;

  @Output()
  eventEmitterUserProgress:EventEmitter<string> = new EventEmitter();

  seeProgress(user:User){
    this.eventEmitterUserProgress.emit(user._id)
  }
}
