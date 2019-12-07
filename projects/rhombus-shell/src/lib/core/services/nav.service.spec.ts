import { TestBed } from '@angular/core/testing';

import { RhombusShellNavService } from './nav.service';

describe('RhombusShellNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhombusShellNavService = TestBed.get(RhombusShellNavService);
    expect(service).toBeTruthy();
  });
});
