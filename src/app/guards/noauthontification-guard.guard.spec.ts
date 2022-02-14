import { TestBed } from '@angular/core/testing';

import { NoauthontificationGuardGuard } from './noauthontification-guard.guard';

describe('NoauthontificationGuardGuard', () => {
  let guard: NoauthontificationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoauthontificationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
