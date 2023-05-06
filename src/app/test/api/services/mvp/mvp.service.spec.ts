import { TestBed } from '@angular/core/testing';
import { MvpService } from 'src/app/api/services/mvp/mvp.service';


describe('MvpService', () => {
  let service: MvpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
