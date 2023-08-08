import { TestBed } from '@angular/core/testing';

import { UniqueidService } from './uniqueid.service';

describe('UniqueidService', () => {
  let service: UniqueidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
