import { TestBed } from '@angular/core/testing';

import { RhShellNavService } from './nav.service';

describe('RhShellNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhShellNavService = TestBed.inject(RhShellNavService);
    expect(service).toBeTruthy();
  });
});
