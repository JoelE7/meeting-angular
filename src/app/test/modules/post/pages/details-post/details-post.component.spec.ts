import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsPostComponent } from 'src/app/modules/post/pages/details-post/details-post.component';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from 'src/app/api/services/post/post.service';
import { mockPostService } from 'src/app/test/__mocks__/services/post/post.service.mock';
import { of } from 'rxjs';
import { Post } from 'src/app/shared/models/post/post.class';
import { mockPostDetails } from '../../../../__mocks__/services/post/post.service.mock';
import { User } from 'src/app/shared/models/user/user.class';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { ModalSuggestComponent } from 'src/app/modules/post/shared/modal-suggest/modal-suggest.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalContactComponent } from 'src/app/shared/components/modal-contact/modal-contact.component';
import { UserService } from 'src/app/api/services/user/user.service';
import { mockUserService } from 'src/app/test/__mocks__/services/user/user.service.mock';
import { Mail } from '../../../../../shared/models/model-mail-contact/model-mail.interface';
import { TechnologiesService } from 'src/app/api/services/data/technologies.service';

describe('DetailsPostComponentConLogin', () => {
  let component: DetailsPostComponent;
  let fixture: ComponentFixture<DetailsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPostComponent ,ModalSuggestComponent ],
      providers: [
        { provide: PostService, useValue: mockPostService },
        { provide: UserService, useValue: mockUserService },
        MessageService,
        TechnologiesService
      ],
      imports:[ PrimengModule,RouterTestingModule,HttpClientTestingModule,BrowserAnimationsModule],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    localStorage.setItem('user',JSON.stringify(userMock))
    component.currentUser = userMock

  });
  
  afterEach(() => {
    localStorage.removeItem("user");
  })

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit("Al iniciar el ngOnInit que se busque el proyecto por id : detailsPost()",()=>{
    const detailsPost = spyOn(mockPostService, 'detailsPost');
    detailsPost.and.returnValue(of<Post>(mockPostDetails));
    component.ngOnInit();
    expect(mockPostService.detailsPost).toHaveBeenCalled();
  })

  xit("debería permitir comentar el post si el usuario está logueado : createMessage()", () => {
    const commentText = 'test de comentario post';
    spyOn(mockPostService, 'createMessage').and.returnValue(of<any>({}));
    component.currentUser = new User();
    
    component.ngOnInit();
    component.form.get('comment').setValue(commentText);
    const isFormValidBeforeSubmit = component.form.valid;
    component.createMessage();
  
    expect(component.form.get('comment').disabled).toBeFalsy();
    expect(isFormValidBeforeSubmit).toBeTruthy();
    expect(mockPostService.createMessage).toHaveBeenCalled();
  });

  xit("que se abra el modal showModalSuggest : showModalSuggest()", () => {
    expect(component.visibleModalSuggest).toBeFalsy();
    component.showModalSuggest();
    expect(component.visibleModalSuggest).toBeTruthy()
  });

  xit("que se abra el modal showModalContact : showModalContact()", () => {
    expect(component.visibleModalContact).toBeFalsy();
    component.showModalContact(new User());
    expect(component.visibleModalContact).toBeTruthy()
  });
    
 xit("que se envíe el mail de contacto al usuario creador del post y se cierre el modal : sendMailContact()", () => {
    const sendMailContact = spyOn(mockUserService, 'sendMailContact');
    sendMailContact.and.returnValue(of<any>({}));
    component.showModalContact(new User());
    component.sendMailContact({email : "", message : "", user : userMock})
    expect(mockUserService.sendMailContact).toHaveBeenCalled();
    expect(component.visibleModalContact).toBeFalsy();
  });

  xit("que se pueda compartir el post y se cierre el modal : sendMailSuggestPost()", () => {
    const sendMailSuggestPost = spyOn(mockPostService, 'sendMailSuggestPost');
    sendMailSuggestPost.and.returnValue(of<any>({}));
    component.showModalSuggest();
    component.sendMailSuggestPost({email : "", message : "", user : userMock})
    expect(mockPostService.sendMailSuggestPost).toHaveBeenCalled();
    expect(component.visibleModalSuggest).toBeFalsy();
  });


});

describe('DetailsPostComponentSinLogin', () => {
  let component: DetailsPostComponent;
  let fixture: ComponentFixture<DetailsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPostComponent,ModalSuggestComponent,ModalContactComponent ],
      providers: [
        { provide: PostService, useValue: mockPostService },
        MessageService,
      ],
      imports:[ PrimengModule,RouterTestingModule,HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit("Al iniciar el ngOnInit que se busque el proyecto por id : detailsPost()",()=>{
    const detailsPost = spyOn(mockPostService, 'detailsPost');
    detailsPost.and.returnValue(of<Post>(mockPostDetails));
    component.ngOnInit();
    expect(mockPostService.detailsPost).toHaveBeenCalled();
  })

  xit("no debería permitir comentar el post si el usuario no está logueado : Form", () => {
    const detailsPost = spyOn(mockPostService, 'detailsPost');
    detailsPost.and.returnValue(of<Post>(mockPostDetails));
    component.currentUser = undefined;
    component.ngOnInit();
    expect(component.form.get('comment').disabled).toBeTruthy();
  });
});
