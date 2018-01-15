import { TestBed, inject } from '@angular/core/testing';

import { NobleService } from './noble.service';

describe('NobleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NobleService]
    });
  });

  it('should be created', inject([NobleService], (service: NobleService) => {
    expect(service).toBeTruthy();
  }));
});
