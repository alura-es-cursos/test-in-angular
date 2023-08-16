import { TestBed } from '@angular/core/testing';
import { UniqueidService } from './uniqueid.service';

describe(UniqueidService.name, () => {
  let service: UniqueidService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueidService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${UniqueidService.prototype.generateUniqueIdWithPrefix.name}' should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});

