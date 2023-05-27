import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-support-collaborate',
  templateUrl: './support-collaborate.component.html',
  styleUrls: ['./support-collaborate.component.css']
})
export class SupportCollaborateComponent {


  @Output()
  eventEmitterSupportJoinProject:EventEmitter<boolean> = new EventEmitter();


  joinProject(){
    this.eventEmitterSupportJoinProject.emit(true);
  }

}
