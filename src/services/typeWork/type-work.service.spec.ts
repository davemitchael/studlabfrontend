import { TestBed, inject } from '@angular/core/testing';

import { TypeWorkService } from './type-work.service';

describe('TypeWorkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeWorkService]
    });
  });

  it('should be created', inject([TypeWorkService], (service: TypeWorkService) => {
    expect(service).toBeTruthy();
  }));
});
