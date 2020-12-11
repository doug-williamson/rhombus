import { TestBed } from '@angular/core/testing';

import { RhAppDynastiesService } from './dynasties.service';

describe('RhAppDynastiesService', () => {
  let service: RhAppDynastiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhAppDynastiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
