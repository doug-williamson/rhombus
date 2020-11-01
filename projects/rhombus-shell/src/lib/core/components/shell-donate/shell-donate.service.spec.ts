import { TestBed } from '@angular/core/testing';

import { ShellDonateService } from './shell-donate.service';

describe('ShellDonateService', () => {
  let service: ShellDonateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShellDonateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
