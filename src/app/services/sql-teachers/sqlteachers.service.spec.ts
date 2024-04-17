import { TestBed } from '@angular/core/testing';

import { SqlteachersService } from './sqlteachers.service';

describe('SqlteachersService', () => {
  let service: SqlteachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlteachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
