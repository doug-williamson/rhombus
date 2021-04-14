import { TestBed } from '@angular/core/testing';

import { DynastiesService } from './dynasties.service';

describe('DynastiesService', () => {
  let service: DynastiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynastiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
