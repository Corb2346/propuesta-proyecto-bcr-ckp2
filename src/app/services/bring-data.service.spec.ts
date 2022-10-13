import { TestBed } from '@angular/core/testing';

import { BringDataService } from './bring-data.service';

describe('BringDataService', () => {
  let service: BringDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BringDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
