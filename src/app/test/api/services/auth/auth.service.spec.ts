import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports : [HttpClientTestingModule],
      providers : [HttpClient,AuthService]
    });
    httpClient = TestBed.inject(HttpTestingController)
    service = TestBed.inject(AuthService);
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loginUser()',(done:DoneFn)=>{
    service.loginUser(userMock).subscribe({
      next : (data)=>{
        done()
      }
    })

    const req:TestRequest = httpClient.expectOne(`${environment.apiUrl}/users/login`)

    expect(req.request.method).toEqual('POST')
    expect(req.request.body).toEqual(userMock)

    req.flush(userMock);

  })

  it('registerUser()',(done:DoneFn)=>{
    service.registerUser(userMock).subscribe({
      next : (data)=>{
        done()
      }
    })

    const req:TestRequest = httpClient.expectOne(`${environment.apiUrl}/users`)

    expect(req.request.method).toEqual('POST')
    expect(req.request.body).toEqual(userMock)
    req.flush({});

  })

  
  afterEach(()=>{
    httpClient.verify()
  })
});
