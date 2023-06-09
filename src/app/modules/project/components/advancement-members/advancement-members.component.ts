import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-advancement-members',
  templateUrl: './advancement-members.component.html',
  styleUrls: ['./advancement-members.component.css']
})
export class AdvancementMembersComponent implements OnInit,DoCheck{

  @Input()
  members:any = [];

  activeIndex = 0;

  @Input()
  userSearch = 0;

  ngOnInit(): void {
    console.log(this.members);
  }

  ngDoCheck(): void {
    // let index = this.members.findIndex(member => member._id === this.userSearch)
    // if(index != -1){
    //   this.activeIndex = index;
    // }
  }

}
