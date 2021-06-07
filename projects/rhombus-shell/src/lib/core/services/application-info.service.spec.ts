import { TestBed } from '@angular/core/testing';

import { RhShellApplicationInfoService } from './application-info.service';

describe('RhShellApplicationInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhShellApplicationInfoService = TestBed.inject(RhShellApplicationInfoService);
    expect(service).toBeTruthy();
  });
});
