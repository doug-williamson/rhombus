import { TestBed } from '@angular/core/testing';

import { RhShellDonateService } from './shell-donate.service';

describe('RhShellDonateService', () => {
  let service: RhShellDonateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RhShellDonateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
