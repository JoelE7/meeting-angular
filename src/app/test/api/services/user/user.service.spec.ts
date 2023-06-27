import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule,HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { UserService } from 'src/app/api/services/user/user.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user/user.class';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { lastValueFrom } from 'rxjs';
import { Mail } from 'src/app/shared/models/model-mail-contact/model-mail.interface';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [UserService]
    });
    httpClient = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllUsersByRanking()', (done: DoneFn) => {
    let paginate = 1;
    service.getAllUsersByRanking(paginate).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/users/ranking/${paginate}`
    );

    expect(req.request.method).toEqual('GET');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/users/ranking/${paginate}`)

    req.flush({});
  });

  it('getAllUser()', (done: DoneFn) => {
    service.getAllUser().subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/users/find`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/users/find`)

    req.flush({});
  });
  
  it('updateUser()', (done: DoneFn) => {
    service.updateUser(userMock).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/users/${userMock._id}`
    );

    expect(req.request.method).toEqual('PUT');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/users/${userMock._id}`)
    expect(req.request.body).toEqual(userMock)

    req.flush({});
  });

  it('updatePreferences()', (done: DoneFn) => {
    let update = {'technologies' : 'Angular,React'}
    service.updatePreferences(userMock,update).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/users/${userMock._id}`
    );

    expect(req.request.method).toEqual('PUT');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/users/${userMock._id}`)
    expect(req.request.body).toEqual(update)

    req.flush({});
  });

  it('getLanguagesGithub', () => {
    const username = 'JoelE7';

    service.getLanguagesGithub(username).then((result) => {
      expect(result).toBeTruthy();
    });

    const req = httpClient.expectOne(
      `${environment.apiUrl}/users/languages/${username}`
    );

    expect(req.request.method).toEqual('GET');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/users/languages/${username}`)
    req.flush({}); 
  });

  it('getRecommendationQuestionUser()', (done: DoneFn) => {
    service.getRecommendationQuestionUser(userMock).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/recommendations/`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/recommendations/`)
    expect(req.request.body).toEqual(userMock)

    req.flush({});
  });

  it('getRecommendationQuestionUser()', (done: DoneFn) => {
    service.getRecommendationQuestionUser(userMock).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/recommendations/`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/recommendations/`)
    expect(req.request.body).toEqual(userMock)

    req.flush({});
  });

  it('detailsUser()', (done: DoneFn) => {
    let id = "1";
    service.detailsUser(id).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/users/${id}`
    );

    expect(req.request.method).toEqual('GET');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/users/${id}`)

    req.flush({});
  });

  it('detailsUserAsync()', () => {
    let id = "1"

    service.detailsUserAsync(id).then((result) => {
      expect(result).toBeTruthy();
    });

    const req = httpClient.expectOne(
      `${environment.apiUrl}/users/${id}`
    );

    expect(req.request.method).toEqual('GET');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/users/${id}`)
    req.flush({}); 
  });

  it('sendMailContact()', (done: DoneFn) => {
    let email:Mail = {
      email : "mock@gmail.com",
      message : "mensage",
      user : userMock
    }
    service.sendMailContact(email).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/users/contact`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/users/contact`)
    expect(req.request.body).toEqual(email)

    req.flush({});
  });

  afterEach(() => {
    httpClient.verify();
  });

});
