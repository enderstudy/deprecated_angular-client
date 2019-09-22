import { TestBed } from '@angular/core/testing';

import { Metadata.ServiceService } from './metadata.service.service';

describe('Metadata.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Metadata.ServiceService = TestBed.get(Metadata.ServiceService);
    expect(service).toBeTruthy();
  });
});
