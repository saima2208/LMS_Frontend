import { TestBed } from '@angular/core/testing';

import { RecordClassService } from './record-class.service';

describe('RecordClassService', () => {
  let service: RecordClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
