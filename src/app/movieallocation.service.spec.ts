import { TestBed } from '@angular/core/testing';

import { MovieallocationService } from './movieallocation.service';

describe('MovieallocationService', () => {
  let service: MovieallocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieallocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
