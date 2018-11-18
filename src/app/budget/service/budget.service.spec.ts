/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BudgetService } from './budget.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Budget', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([BudgetService], (service: BudgetService) => {
    expect(service).toBeTruthy();
  }));
});
