import { TestBed } from '@angular/core/testing';

import { RhAuthGuardService } from './auth-guard.service';

describe('RhAuthGuardService', () => {
  let service: RhAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
