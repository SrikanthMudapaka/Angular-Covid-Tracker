import { TestBed } from '@angular/core/testing';

import { Trackercovid19Service } from './trackercovid19.service';

describe('Trackercovid19Service', () => {
  let service: Trackercovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Trackercovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
