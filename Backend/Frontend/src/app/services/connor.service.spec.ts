import { TestBed } from '@angular/core/testing';

import { ConnorService } from './connor.service';

describe('ConnorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnorService = TestBed.get(ConnorService);
    expect(service).toBeTruthy();
  });
});
