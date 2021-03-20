import { TestBed } from '@angular/core/testing';

import { DynastyMarkService } from './dynasty-mark.service';

describe('DynastyMarkService', () => {
  let service: DynastyMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynastyMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
