import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { UserService } from 'src/app/api/services/user/user.service';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpTestingController;
  // heroService = new UserService(httpClientSpy as any);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it("que se devuelvan los usuarios",(done:DoneFn)=>{

  // })
});
