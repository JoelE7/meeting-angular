import { Component } from '@angular/core';

@Component({
  selector: 'app-create-mvp',
  templateUrl: './create-mvp.component.html',
  styleUrls: ['./create-mvp.component.css'],
})
export class CreateMvpComponent {
  createMvp(event: any) {
    console.log('llego el mvp desde el form');
  }
}
