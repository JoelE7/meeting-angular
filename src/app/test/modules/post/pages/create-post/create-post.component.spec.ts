import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from '../../../../../modules/post/pages/create-post/create-post.component';
import { PostService } from 'src/app/api/services/post/post.service';
import { MessageService } from 'primeng/api';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormPostComponent } from 'src/app/modules/post/components/form-post/form-post.component';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostComponent,FormPostComponent ],
      providers:[PostService,MessageService],
      imports:[ PrimengModule,HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
