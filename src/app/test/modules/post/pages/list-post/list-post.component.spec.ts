import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostComponent } from '../../../../../modules/post/pages/list-post/list-post.component';
import { CardPostComponent } from '../../../../../modules/post/components/card-post/card-post.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FiltersComponent } from 'src/app/shared/filters/filters.component';
import { mockGetAllPost, mockPostService } from 'src/app/test/__mocks__/services/post/post.service.mock';
import { of } from 'rxjs';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { DataService } from 'src/app/api/services/data/data.service';
import { mockDataService, mockTechnologies } from 'src/app/test/__mocks__/services/data/data.service.mock';

describe('ListPostComponentConLogin', () => {
  let component: ListPostComponent;
  let fixture: ComponentFixture<ListPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostComponent,CardPostComponent,FiltersComponent ],
      providers:[ { provide: PostService, useValue: mockPostService },MessageService],
      imports:[ PrimengModule,HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostComponent);
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
});

describe('ListPostComponentSinLogin', () => {
  let component: ListPostComponent;
  let fixture: ComponentFixture<ListPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostComponent,CardPostComponent,FiltersComponent ],
      providers:[ { provide: PostService, useValue: mockPostService },MessageService,{ provide: DataService, useValue: mockDataService }],
      imports:[ PrimengModule,HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('al iniciar el ngOnInit se deben buscar los post : getAllPost()',()=>{
    const getAllPost = spyOn(mockPostService,'getAllPost');
    const getTechnologies = spyOn(mockDataService, 'getTechnologies');
    getTechnologies.and.returnValue(of<any[]>(mockTechnologies));
    getAllPost.and.returnValue(of(mockGetAllPost))
    component.ngOnInit();
    expect(mockPostService.getAllPost).toHaveBeenCalled();
  })
});
