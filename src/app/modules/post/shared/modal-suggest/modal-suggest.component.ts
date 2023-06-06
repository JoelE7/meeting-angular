import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MailSuggest } from 'src/app/shared/models/model-mail-suggest/model-mail.interface';
import { Post } from 'src/app/shared/models/post/post.class';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-modal-suggest',
  templateUrl: './modal-suggest.component.html',
  styleUrls: ['./modal-suggest.component.css']
})
export class ModalSuggestComponent {
  formContact: FormGroup;

  @Input()
  userEmisor: User = new User();

  @Input()
  userReceptor: User = new User();
  
  @Input()
  post: Post = new Post();;

  mail: MailSuggest;

  @Output()
  emitContact: EventEmitter<MailSuggest> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.startForm();
    this.formContact.get('to').disable();
    this.formContact.get('to').setValue(this.userEmisor.email);
    this.formContact.get('post').setValue(this.post.title)
  }
  startForm() {
    this.formContact = new FormGroup({
      to: new FormControl(),
      for: new FormControl(),
      message: new FormControl("",[Validators.required,Validators.minLength(3)]),
      post:new FormControl(),
     
    });
  }

  submitContact() {
    this.mail = {
      user: this.userEmisor,
      email: this.formContact.get('for').value,
      message: this.formContact.get('message').value,
      post: this.post,
    };

    this.emitContact.emit(this.mail);
  }

}
