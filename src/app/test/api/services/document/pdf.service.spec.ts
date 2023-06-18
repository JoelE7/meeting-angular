import { TestBed } from '@angular/core/testing';

import { PdfService } from '../../../../api/services/document/pdf.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PdfService', () => {
  let service: PdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(PdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
