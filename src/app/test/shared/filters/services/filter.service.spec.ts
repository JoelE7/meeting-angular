import { TestBed } from '@angular/core/testing';
import { FilterService } from 'src/app/shared/filters/services/filter.service';


describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
