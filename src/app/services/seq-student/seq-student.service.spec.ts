import { TestBed } from '@angular/core/testing';

import { SeqStudentService } from './seq-student.service';

describe('SeqStudentService', () => {
  let service: SeqStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeqStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
