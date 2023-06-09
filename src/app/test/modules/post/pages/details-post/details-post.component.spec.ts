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

describe('DetailsPostComponentConLogin', () => {
  let component: DetailsPostComponent;
  let fixture: ComponentFixture<DetailsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPostComponent ,ModalSuggestComponent ],
      providers: [
        { provide: PostService, useValue: mockPostService },
        MessageService,
      ],
      imports:[ PrimengModule,RouterTestingModule,HttpClientTestingModule,BrowserAnimationsModule],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    localStorage.setItem('user',JSON.stringify(userMock))

  });
  
  afterEach(() => {
    localStorage.removeItem("user");
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Al iniciar el ngOnInit que se busque el proyecto por id : detailsPost()",()=>{
    const detailsPost = spyOn(mockPostService, 'detailsPost');
    detailsPost.and.returnValue(of<Post>(mockPostDetails));
    component.ngOnInit();
    expect(mockPostService.detailsPost).toHaveBeenCalled();
  })

  it("debería permitir comentar el post si el usuario está logueado : createMessage()", () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Al iniciar el ngOnInit que se busque el proyecto por id : detailsPost()",()=>{
    const detailsPost = spyOn(mockPostService, 'detailsPost');
    detailsPost.and.returnValue(of<Post>(mockPostDetails));
    component.ngOnInit();
    expect(mockPostService.detailsPost).toHaveBeenCalled();
  })

  it("no debería permitir comentar el post si el usuario no está logueado : Form", () => {
    const detailsPost = spyOn(mockPostService, 'detailsPost');
    detailsPost.and.returnValue(of<Post>(mockPostDetails));
    component.currentUser = undefined;
    component.ngOnInit();
    expect(component.form.get('comment').disabled).toBeTruthy();
  });
});
