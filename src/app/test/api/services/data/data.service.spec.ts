import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { DataService } from 'src/app/api/services/data/data.service';
import { environment } from 'src/environments/environment';

describe('DataService', () => {
  let service: DataService;
  let httpClient:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [HttpClient,DataService]
    });
    service = TestBed.inject(DataService);
    httpClient = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getTechnologies()',(done:DoneFn)=>{
    service.getTechnologies().subscribe({
      next : (data)=>{
        done()
      }
    })

    const req:TestRequest = httpClient.expectOne(`${environment.apiUrl}/common/technologies`)

    expect(req.request.method).toEqual('GET')

    req.flush({});

  })

  afterEach(()=>{
    httpClient.verify()
  })
});
