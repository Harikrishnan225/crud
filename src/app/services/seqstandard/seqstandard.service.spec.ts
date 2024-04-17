import { TestBed } from '@angular/core/testing';

import { SeqstandardService } from './seqstandard.service';

describe('SeqstandardService', () => {
  let service: SeqstandardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeqstandardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
