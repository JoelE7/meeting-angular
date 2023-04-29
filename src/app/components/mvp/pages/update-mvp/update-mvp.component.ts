import { Component } from '@angular/core';

@Component({
  selector: 'app-update-mvp',
  templateUrl: './update-mvp.component.html',
  styleUrls: ['./update-mvp.component.css']
})
export class UpdateMvpComponent {

  editMvp = "";

  updateMvp(mvp:any){
    console.log("llego el mvp desde el form");
  }

}
