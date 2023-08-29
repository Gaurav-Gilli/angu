import { TestBed } from '@angular/core/testing';

import { PansexualService } from './pansexual.service';

describe('PansexualService', () => {
  let service: PansexualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PansexualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
