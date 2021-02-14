import { TestBed } from '@angular/core/testing';

import { RhAuthService } from './auth.service';

describe('RhAuthService', () => {
  let service: RhAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
