import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/user/user.class';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.css']
})
export class ModalContactComponent{// export class ModalContactComponent implements OnInit {
  
// formContact:FormGroup;
  
  @Input()
  userEmisor:User= new User();
 
  @Input()
  userReceptor:User= new User();


  constructor(
    private messageService: MessageService
  ) {}
  
  // startFrom() {
  //   this.formContact = new FormGroup({
  //   //   name: new FormControl(this.project.name, [Validators.required]),
  //   //   description: new FormControl(this.project.description, [
  //   //     Validators.required,
  //   //     Validators.minLength(10),
  //   //   ]),
  //   //   startDate: new FormControl(this.project.startDate, [
  //   //     Validators.required,
  //   //   ]),
  //   //   // startDate: new FormControl(this.project.startDate || new Date(), [
  //   //   //   Validators.required,
  //   //   // ]),
  //   //   endDate: new FormControl(this.project.endDate, [Validators.required]),
  //   //   typeProject: new FormControl(this.project.typeProject, [
  //   //     Validators.required,
  //   //   ]),
  //   //   complexity: new FormControl(this.project.complexity, [
  //   //     Validators.required,
  //   //   ]),
  //   //   status: new FormControl(this.project.status, [Validators.required]),
  //   //   amountParticipants: new FormControl(this.project.amountParticipants, [
  //   //     Validators.required,
  //   //     Validators.min(1),
  //   //   ]),
  //   //   lider: new FormControl(this.project.liderId || false, []),
  //   //   requestSupport: new FormControl(this.project.requestSupport || false, []),
  //    });
  // }

  // submitContact(){

  // }
}
