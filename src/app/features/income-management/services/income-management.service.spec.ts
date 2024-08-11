import { TestBed } from '@angular/core/testing';

import { IncomeManagementService } from './income-management.service';

describe('IncomeManagementService', () => {
  let service: IncomeManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
