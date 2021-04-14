import { TestBed } from '@angular/core/testing';

import { RhDynastyMarkYearWeeksService } from './weeks.service';

describe('RhDynastyMarkYearWeeksService', () => {
  let service: RhDynastyMarkYearWeeksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhDynastyMarkYearWeeksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
