import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorConstants } from '../../constants/error.constants';
import { TimeoutError, Observable } from 'rxjs';
import { NgxHttpClientService } from './ngx-http-client.service';
import { ApiPathService } from '../api-path/api-path.service';
import { HttpOptions, HttpOption, HttpParam, HttpHeader } from '../../models/http-options.model';
import { PathQuery } from '../../models/common-lib.model';

describe('NgxHttpClientService Test Suit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxHttpClientService],
      imports: [HttpClientTestingModule]
    });
  });

  function setup() {
    const ngxHttpClientService: NgxHttpClientService = TestBed.inject(NgxHttpClientService);
    const httpTestingController: HttpTestingController = TestBed.inject(HttpTestingController);
    const apiUrlService: ApiPathService = TestBed.inject(ApiPathService);
    return { ngxHttpClientService, httpTestingController, apiUrlService };
  }

  describe('NgxHttpClientService service created', () => {
    it('NgxHttpClientService service should be created', () => {
      const service: NgxHttpClientService = TestBed.get(NgxHttpClientService);
      expect(service).toBeTruthy();
    });
  });
  
  describe('GET Method Test Suite', () => {

    it('should call the method get() and should return the success response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData =  new Observable<Object>();
      const pathParams = ['api', 'user'];
      const apiQueryParam:  PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptionsParams: HttpOption = new HttpOption();
      const httpHeaderParams:  HttpHeader = {'authorization': 'Bearer xyz'};
      const httpPathParams: HttpParam = { userName: 'xyz' };
      httpOptionsParams.header = httpHeaderParams;
      httpOptionsParams.param = httpPathParams;

      ngxHttpClientService.get(pathParams, httpOptionsParams).subscribe(data => {
        expect(data).toEqual(mockData);
      }, () => { });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });

    it('should call the method get() and should return the error response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = ErrorConstants.SOMETHING_WENT_WRONG_HTTP_RESPONSE;
      const pathParams = ['api', 'user'];
      const apiQueryParam:  PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptionsParams: HttpOption = new HttpOption();
      const httpHeaderParams:  HttpHeader = {'authorization': 'Bearer xyz'};
      const httpPathParams: HttpParam = { userName: 'xyz' };
      httpOptionsParams.header = httpHeaderParams;
      httpOptionsParams.param = httpPathParams;

      ngxHttpClientService.get(pathParams, httpOptionsParams).subscribe(() => {
      }, (data: HttpErrorResponse | TimeoutError | Error) => {
        expect(data).toEqual(mockData);
      });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('GET');

      req.flush(mockData);
    });
  });

  describe('POST Method Test Suite', () => {

    it('should call the method post() and should return the success response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = new Observable<Object>();
      const pathParams = ['api', 'user'];
      const body = {};
      const apiQueryParam:  PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptionsParams: HttpOption = new HttpOption();
      const httpHeaderParams:  HttpHeader = {'authorization': 'Bearer xyz'};
      const httpPathParams: HttpParam = { userName: 'xyz' };
      httpOptionsParams.header = httpHeaderParams;
      httpOptionsParams.param = httpPathParams;

      ngxHttpClientService.post(pathParams, body, httpOptionsParams).subscribe(data => {
        expect(data).toEqual(mockData);
      }, () => { });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);
      
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toBe(body);

      req.flush(mockData);
    });

    it('should call the method post() and should return the error response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = ErrorConstants.SOMETHING_WENT_WRONG_HTTP_RESPONSE;
      const pathParams = ['api', 'user'];
      const body = {};
      const apiQueryParam:  PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptionsParams: HttpOption = new HttpOption();
      const httpHeaderParams:  HttpHeader = {'authorization': 'Bearer xyz'};
      const httpPathParams: HttpParam = { userName: 'xyz' };
      httpOptionsParams.header = httpHeaderParams;
      httpOptionsParams.param = httpPathParams;

      ngxHttpClientService.post(pathParams, body, httpOptionsParams).subscribe(() => {
      }, (data: HttpErrorResponse | TimeoutError | Error) => {
        expect(data).toEqual(mockData);
      });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('POST');
      expect(req.request.body).toBe(body);

      req.flush(mockData);
    });
  });

  describe('PUT Method Test Suite', () => {

    it('should call the method put() and should return the success response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = new Observable<Object>();
      const pathParams = ['api', 'user'];
      const body = {};
      const apiQueryParam:  PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptionsParams: HttpOption = new HttpOption();
      const httpHeaderParams:  HttpHeader = {'authorization': 'Bearer xyz'};
      const httpPathParams: HttpParam = { userName: 'xyz' };
      httpOptionsParams.header = httpHeaderParams;
      httpOptionsParams.param = httpPathParams;

      ngxHttpClientService.put(pathParams, body, httpOptionsParams).subscribe(data => {
        expect(data).toEqual(mockData);
      }, () => { });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toBe(body);

      req.flush(mockData);
    });

    it('should call the method put() and should return the error response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = ErrorConstants.SOMETHING_WENT_WRONG_HTTP_RESPONSE;
      const pathParams = ['api', 'user'];
      const body = {};
      const apiQueryParam:  PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptionsParams: HttpOption = new HttpOption();
      const httpHeaderParams:  HttpHeader = {'authorization': 'Bearer xyz'};
      const httpPathParams: HttpParam = { userName: 'xyz' };
      httpOptionsParams.header = httpHeaderParams;
      httpOptionsParams.param = httpPathParams;

      ngxHttpClientService.put(pathParams, body, httpOptionsParams).subscribe(() => {
      }, (data: HttpErrorResponse | TimeoutError | Error) => {
        expect(data).toEqual(mockData);
      });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toBe(body);

      req.flush(mockData);
    });
  });

  describe('DELETE Method Test Suite', () => {

    it('should call the method delete() and should return the success response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = new Observable<Object>();
      const pathParams = ['api', 'user'];
      const apiQueryParam:  PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptionsParams: HttpOption = new HttpOption();
      const httpHeaderParams:  HttpHeader = {'authorization': 'Bearer xyz'};
      const httpPathParams: HttpParam = { userName: 'xyz' };
      httpOptionsParams.header = httpHeaderParams;
      httpOptionsParams.param = httpPathParams;

      ngxHttpClientService.delete(pathParams, httpOptionsParams).subscribe(data => {
        expect(data).toEqual(mockData);
      }, () => { });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('DELETE');

      req.flush(mockData);
    });

    it('should call the method delete() and should return the error response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = ErrorConstants.SOMETHING_WENT_WRONG_HTTP_RESPONSE;
      const pathParams = ['api', 'user'];
      const apiQueryParam:  PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptionsParams: HttpOption = new HttpOption();
      const httpHeaderParams:  HttpHeader = {'authorization': 'Bearer xyz'};
      const httpPathParams: HttpParam = { userName: 'xyz' };
      httpOptionsParams.header = httpHeaderParams;
      httpOptionsParams.param = httpPathParams;
      
      ngxHttpClientService.delete(pathParams, httpOptionsParams).subscribe(() => {
      }, (data: HttpErrorResponse | TimeoutError | Error) => {
        expect(data).toEqual(mockData);
      });
      
      const req: TestRequest = httpTestingController.expectOne(requestUrl);
      
      expect(req.request.method).toBe('DELETE');

      req.flush(mockData);
    });
  });

  afterEach(() => {
    const { httpTestingController } = setup();
    httpTestingController.verify();
    TestBed.resetTestingModule();
  });
});