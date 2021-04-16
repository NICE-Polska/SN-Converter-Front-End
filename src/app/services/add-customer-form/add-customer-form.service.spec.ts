import { TestBed } from '@angular/core/testing';

import { AddCustomerFormService } from './add-customer-form.service';

describe('AddCustomerFormService', () => {
  let service: AddCustomerFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCustomerFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
