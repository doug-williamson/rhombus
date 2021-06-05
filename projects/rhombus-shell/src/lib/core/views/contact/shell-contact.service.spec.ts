import { TestBed } from '@angular/core/testing';

import { ShellContactService } from './shell-contact.service';

describe('ShellContactService', () => {
  let service: ShellContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShellContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
