import { TestBed, inject } from '@angular/core/testing';

import { ApiCodebreakerService } from './api-codebreaker.service';

describe('ApiCodebreakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCodebreakerService]
    });
  });

  it('should be created', inject([ApiCodebreakerService], (service: ApiCodebreakerService) => {
    expect(service).toBeTruthy();
  }));
});
