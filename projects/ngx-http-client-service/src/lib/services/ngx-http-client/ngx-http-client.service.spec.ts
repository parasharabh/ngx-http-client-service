import { TestBed } from '@angular/core/testing';

import { NgxHttpClientService } from './ngx-http-client.service';

describe('NgxHttpClientServiceService', () => {
  let service: NgxHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
