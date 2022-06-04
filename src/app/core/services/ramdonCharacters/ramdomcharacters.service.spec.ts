import { TestBed } from '@angular/core/testing';

import { RamdomcharactersService } from './ramdomcharacters.service';

describe('RamdomcharactersService', () => {
  let service: RamdomcharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamdomcharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
