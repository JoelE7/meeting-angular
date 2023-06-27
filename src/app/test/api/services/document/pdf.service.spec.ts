import { TestBed } from '@angular/core/testing';

import { PdfService } from '../../../../api/services/document/pdf.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('PdfService', () => {
  let service: PdfService;
  let httpClient:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(PdfService);
    httpClient = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('downloadCertificate()',(done:DoneFn)=>{

    let response = new Blob();

    service.downloadCertificate("<h1>Test</h1>").subscribe({
      next : (data)=>{
        done()
      }
    })

    const req:TestRequest = httpClient.expectOne(`${environment.apiUrl}/projects/download`)

    expect(req.request.method).toEqual('POST')

    req.flush(response);

  })

  afterEach(()=>{
    httpClient.verify()
  })

});
