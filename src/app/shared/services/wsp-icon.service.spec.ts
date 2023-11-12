import { TestBed } from '@angular/core/testing';

import { WspIconService } from './wsp-icon.service';

describe('WspIconService', () => {
  let service: WspIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WspIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
