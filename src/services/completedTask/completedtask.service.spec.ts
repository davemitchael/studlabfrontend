import { TestBed, inject } from '@angular/core/testing';

import { CompletedtaskService } from './completedtask.service';

describe('CompletedtaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletedtaskService]
    });
  });

  it('should be created', inject([CompletedtaskService], (service: CompletedtaskService) => {
    expect(service).toBeTruthy();
  }));
});
