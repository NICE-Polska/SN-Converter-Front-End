import { TestBed } from '@angular/core/testing';

import { SerialNumberSaveService } from './serial-number-save.service';

describe('SerialNumberSaveService', () => {
  let service: SerialNumberSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerialNumberSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
