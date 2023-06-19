import { Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-request-member',
  templateUrl: './request-member.component.html',
  styleUrls: ['./request-member.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class RequestMemberComponent {

  @Input()
  user:User;

  @Output()
  eventEmitterUserRequest:EventEmitter<any> = new EventEmitter();

  sendRequest(user:User,request:boolean){
    this.eventEmitterUserRequest.emit({user,request})
  }
}
