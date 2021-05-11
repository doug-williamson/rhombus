import { TestBed } from '@angular/core/testing';

import { RhShellModulesService } from './modules.service';

describe('RhShellModulesService', () => {
  let service: RhShellModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhShellModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
