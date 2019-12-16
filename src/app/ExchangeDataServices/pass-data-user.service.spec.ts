import { TestBed } from '@angular/core/testing';

import { PassDataUserService } from './pass-data-user.service';

describe('PassDataUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassDataUserService = TestBed.get(PassDataUserService);
    expect(service).toBeTruthy();
  });
});
