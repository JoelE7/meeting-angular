import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from '../../../../../modules/post/pages/create-post/create-post.component';
import { PostService } from 'src/app/api/services/post/post.service';
import { MessageService } from 'primeng/api';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormPostComponent } from 'src/app/modules/post/components/form-post/form-post.component';
import { mockPostService } from 'src/app/test/__mocks__/services/post/post.service.mock';
import { of } from 'rxjs';
import { Post } from 'src/app/shared/models/post/post.class';
import { ListPostComponent } from 'src/app/modules/post/pages/list-post/list-post.component';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePostComponent, FormPostComponent],
      providers: [
        { provide: PostService, useValue: mockPostService },
        MessageService,
      ],
      imports: [
        PrimengModule,
        RouterTestingModule.withRoutes([
          { path: 'post/list-post', component: ListPostComponent },
        ]),
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('al crear un post que se llame al método del servicio : createPost', () => {
    const createPost = spyOn(mockPostService, 'createPost');
    createPost.and.returnValue(of<any>({}));
    component.createPost(new Post());
    expect(mockPostService.createPost).toHaveBeenCalled();
  });
});
