import { TestBed } from '@angular/core/testing';

import { UserMeriemHamoudaService } from './user-meriem-hamouda.service';

describe('UserMeriemHamoudaService', () => {
  let service: UserMeriemHamoudaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMeriemHamoudaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
