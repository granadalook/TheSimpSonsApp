import { TestBed } from '@angular/core/testing';

import { AllcharactersService } from './allcharacters.service';

describe('AllcharactersService', () => {
  let service: AllcharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllcharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
