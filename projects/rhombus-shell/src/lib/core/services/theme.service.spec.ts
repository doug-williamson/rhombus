import { TestBed } from '@angular/core/testing';

import { RhShellThemeService } from './theme.service';

describe('RhShellThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhShellThemeService = TestBed.inject(RhShellThemeService);
    expect(service).toBeTruthy();
  });
});
