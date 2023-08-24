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

  it(`#${UniqueidService.prototype.generateUniqueIdWithPrefix.name}' should throw an error when called without prefix)`, () => {
    expect(() => {
      service.generateUniqueIdWithPrefix('');
    }).toThrowError('Prefix can not be empty');
  });

 
  it(`#${UniqueidService.prototype.generateUniqueIdWithPrefix.name}' should return the correct number of generated IDs`, () => {
    const initCount = service.getNumberOfGenerateUniqueIds();
    service.generateUniqueIdWithPrefix('test');
    service.generateUniqueIdWithPrefix('test');
    const finalCount = service.getNumberOfGenerateUniqueIds();
    expect(finalCount).toBe(initCount+2);
  })
});

