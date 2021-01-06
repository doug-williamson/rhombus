import { TestBed } from '@angular/core/testing';

import { RhShellAuthService } from './auth.service';

describe('RhShellAuthService', () => {
  let service: RhShellAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhShellAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
