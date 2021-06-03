import { TestBed } from '@angular/core/testing';

import { NgxHttpClientServiceService } from './ngx-http-client-service.service';

describe('NgxHttpClientServiceService', () => {
  let service: NgxHttpClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHttpClientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
