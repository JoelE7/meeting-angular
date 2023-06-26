import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { PostService } from 'src/app/api/services/post/post.service';
import { environment } from 'src/environments/environment';
import { mockPostDetails } from 'src/app/test/__mocks__/services/post/post.service.mock';
import { Method } from 'src/app/shared/filters/enum/method.enum';
import { FilterService } from 'src/app/shared/filters/services/filter.service';
import { MailSuggest } from 'src/app/shared/models/model-mail-suggest/model-mail.interface';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';

describe('PostService', () => {
  let service: PostService;
  let filterService: FilterService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FilterService, PostService],
    });
    service = TestBed.inject(PostService);
    filterService = TestBed.inject(FilterService);
    httpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createPost()', (done: DoneFn) => {
    service.createPost(mockPostDetails).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/posts/`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockPostDetails);

    req.flush({});
  });

  it('createMessage()', (done: DoneFn) => {
    let bodyTest = 'mensaje';
    service.createMessage(bodyTest).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/messages`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(bodyTest);

    req.flush({});
  });

  it('getAllPost()', (done: DoneFn) => {
    let filtersAccept = [
      'title',
      'body',
      'date',
      'author',
      'messages',
      'project',
      'technologies',
    ];
    let pagination = 1;
    let query = [
        {
          col: 'technologies',
          value: {
            "technologie" : ['Angular'],
          },
        },
    ]
    query['method'] = Method.POST

    let queryBuild = filterService.getFiltersForPost(query,filtersAccept)

    service.getAllPost(query, 1).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/posts/filter/${pagination}`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(queryBuild);

    req.flush({});
  });

  it('detailsPost()', (done: DoneFn) => {
    let id = 1;
    service.detailsPost(1).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/posts/${id}`
    );

    expect(req.request.method).toEqual('GET');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/posts/${id}`)

    req.flush({});
  });

  it('sendMailSuggestPost()', (done: DoneFn) => {
    let mail:MailSuggest = {
      email : "emaail@gmail.com",
      message : "mensaje",
      user : userMock,
      post : mockPostDetails
    }
    let id = 1;
    service.sendMailSuggestPost(mail).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/posts/suggest`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mail);

    req.flush({});
  });

  afterEach(() => {
    httpClient.verify();
  });
});
