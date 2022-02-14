import { TestBed } from '@angular/core/testing';

import { AuthontificationGuardGuard } from './authontification-guard.guard';

describe('AuthontificationGuardGuard', () => {
  let guard: AuthontificationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthontificationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
