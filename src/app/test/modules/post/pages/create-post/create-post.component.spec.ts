import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from '../../../../../modules/post/pages/create-post/create-post.component';
import { PostService } from 'src/app/api/services/post/post.service';
import { MessageService } from 'primeng/api';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormPostComponent } from 'src/app/modules/post/components/form-post/form-post.component';
import { mockPostService } from 'src/app/test/__mocks__/services/post/post.service.mock';
import { Observable, finalize, of, tap, throwError } from 'rxjs';
import { Post } from 'src/app/shared/models/post/post.class';
import { ListPostComponent } from 'src/app/modules/post/pages/list-post/list-post.component';
import { Router } from '@angular/router';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;
  let router: Router;

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
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('al crear un post que se llame al método del servicio : createPost y que este rediriga a /post/list-post', () => {
    const createPost = spyOn(mockPostService, 'createPost');
    const navigateSpy = spyOn(router, 'navigate');

    createPost.and.returnValue(of<any>({}));
    component.createPost(new Post());
    expect(mockPostService.createPost).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/post/list-post']);
  });
  
  it('al crear mal un post que se llame al método del servicio : createPost y que esté no rediriga', () => {
    const createPost = spyOn(mockPostService, 'createPost');
    const navigateSpy = spyOn(router, 'navigate');

    createPost.and.returnValue(
      of({}).pipe(
        tap(() => {
          throw { status: 500 };
        })
      )
    );

    component.createPost(new Post());
    expect(mockPostService.createPost).toHaveBeenCalled();
    expect(navigateSpy).not.toHaveBeenCalledWith(['/post/list-post']);
  });
});
