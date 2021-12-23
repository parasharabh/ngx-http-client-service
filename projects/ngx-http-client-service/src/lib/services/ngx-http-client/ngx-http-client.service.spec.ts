
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorConstants } from '../../constants/error.constants';
import { TimeoutError, Observable } from 'rxjs';
import { NgxHttpClientService } from './ngx-http-client.service';
import { ApiPathService } from '../api-path/api-path.service';
import { HttpOptions, NgxHttpOptions, NgxHttpParams, NgxHttpHeaders } from '../../models/http-options.model';
import {PathQuery } from '../../models/common-lib.model';
import { TestBed } from '@angular/core/testing';

describe('NgxHttpClientService Test Suit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxHttpClientService],
      imports: [HttpClientTestingModule]
    });
  });

  function setup() {
    const ngxHttpClientService: NgxHttpClientService = TestBed.get(NgxHttpClientService);
    const httpTestingController: HttpTestingController = TestBed.get(HttpTestingController);
    const apiUrlService: ApiPathService = TestBed.get(ApiPathService);
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
      const mockData =  new Observable<object>();
      const pathParams = ['api', 'user'];
      const apiQueryParam: PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz'};
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.get(pathParams, httpOptions).subscribe(data => {
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
      const apiQueryParam: PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz'};
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.get(pathParams, httpOptions).subscribe(() => {
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
      const mockData = new Observable<object>();
      const pathParams = ['api', 'user'];
      const body = {};
      const apiQueryParam: PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz'};
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.post(pathParams, body, httpOptions).subscribe(data => {
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
      const apiQueryParam: PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz'};
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.post(pathParams, body, httpOptions).subscribe(() => {
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
      const mockData = new Observable<object>();
      const pathParams = ['api', 'user'];
      const body = {};
      const apiQueryParam: PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz'};
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.put(pathParams, body, httpOptions).subscribe(data => {
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
      const apiQueryParam: PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz'};
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.put(pathParams, body, httpOptions).subscribe(() => {
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
      const mockData = new Observable<object>();
      const pathParams = ['api', 'user'];
      const apiQueryParam: PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz'};
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.delete(pathParams, httpOptions).subscribe(data => {
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
      const apiQueryParam: PathQuery = {userName: 'xyz'};
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz'};
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.delete(pathParams, httpOptions).subscribe(() => {
      }, (data: HttpErrorResponse | TimeoutError | Error) => {
        expect(data).toEqual(mockData);
      });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('DELETE');

      req.flush(mockData);
    });
  });

  describe('REQUEST Method Test Suite', () => {

    it('should call the method request() and should return the success response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const method = 'GET';
      const mockData = new Observable<object>();
      const pathParams = ['api', 'user'];
      const apiQueryParam: PathQuery = { userName: 'xyz' };
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz' };
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.request(method, pathParams, httpOptions).subscribe(data => {
        expect(data).toEqual(mockData);
      }, () => { });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('GET');

      req.flush(mockData);
    });

    it('should call the method request() and should return the error response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const method = 'GET';
      const mockData = ErrorConstants.SOMETHING_WENT_WRONG_HTTP_RESPONSE;
      const pathParams = ['api', 'user'];
      const apiQueryParam: PathQuery = { userName: 'xyz' };
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz' };
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.request(method, pathParams, httpOptions).subscribe(() => {
      }, (data: HttpErrorResponse | TimeoutError | Error) => {
        expect(data).toEqual(mockData);
      });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('GET');

      req.flush(mockData);
    });
  });

  describe('HEAD Method Test Suite', () => {

    it('should call the method head() and should return the success response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = new Observable<object>();
      const pathParams = ['api', 'user'];
      const apiQueryParam: PathQuery = { userName: 'xyz' };
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz' };
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.head(pathParams, httpOptions).subscribe(data => {
        expect(data).toEqual(mockData);
      }, () => { });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('HEAD');
      req.flush(mockData);
    });

    it('should call the method head() and should return the error response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = ErrorConstants.SOMETHING_WENT_WRONG_HTTP_RESPONSE;
      const pathParams = ['api', 'user'];
      const apiQueryParam: PathQuery = { userName: 'xyz' };
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz' };
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.head(pathParams, httpOptions).subscribe(() => {
      }, (data: HttpErrorResponse | TimeoutError | Error) => {
        expect(data).toEqual(mockData);
      });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('HEAD');

      req.flush(mockData);
    });
  });

  describe('JSONP Method Test Suite', () => {

    it('should call the method jsonp() and should return the success response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = new Observable<object>();
      const pathParams = ['api', 'user'];
      const apiQueryParam: PathQuery = { callback: 'JSONP_CALLBACK' };
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      ngxHttpClientService.jsonp(pathParams, 'callback').subscribe(data => {
        expect(data).toEqual(mockData);
      }, () => { });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('JSONP');
      req.flush(mockData);
    });

    it('should call the method jsonp() and should return the error response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = ErrorConstants.SOMETHING_WENT_WRONG_HTTP_RESPONSE;
      const pathParams = ['api', 'user'];
      const apiQueryParam: PathQuery = { callback: 'JSONP_CALLBACK' };
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      ngxHttpClientService.jsonp(pathParams, 'callback').subscribe(() => {
      }, (data: HttpErrorResponse | TimeoutError | Error) => {
        expect(data).toEqual(mockData);
      });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('JSONP');

      req.flush(mockData);
    });
  });

  describe('OPTIONS Method Test Suite', () => {

    it('should call the method options() and should return the success response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = new Observable<object>();
      const pathParams = ['api', 'user'];
      const apiQueryParam: PathQuery = { userName: 'xyz' };
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz' };
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.options(pathParams, httpOptions).subscribe(data => {
        expect(data).toEqual(mockData);
      }, () => { });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('OPTIONS');
      req.flush(mockData);
    });

    it('should call the method options() and should return the error response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = ErrorConstants.SOMETHING_WENT_WRONG_HTTP_RESPONSE;
      const pathParams = ['api', 'user'];
      const apiQueryParam: PathQuery = { userName: 'xyz' };
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz' };
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.options(pathParams, httpOptions).subscribe(() => {
      }, (data: HttpErrorResponse | TimeoutError | Error) => {
        expect(data).toEqual(mockData);
      });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('OPTIONS');

      req.flush(mockData);
    });
  });

  describe('PATCH Method Test Suite', () => {

    it('should call the method patch() and should return the success response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = new Observable<object>();
      const pathParams = ['api', 'user'];
      const body = {};
      const apiQueryParam: PathQuery = { userName: 'xyz' };
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz' };
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.patch(pathParams, body, httpOptions).subscribe(data => {
        expect(data).toEqual(mockData);
      }, () => { });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('PATCH');
      expect(req.request.body).toBe(body);

      req.flush(mockData);
    });

    it('should call the method post() and should return the error response', () => {
      const { ngxHttpClientService, httpTestingController, apiUrlService } = setup();
      const mockData = ErrorConstants.SOMETHING_WENT_WRONG_HTTP_RESPONSE;
      const pathParams = ['api', 'user'];
      const body = {};
      const apiQueryParam: PathQuery = { userName: 'xyz' };
      const requestUrl = apiUrlService.createApiPathWithQuery(pathParams, apiQueryParam);

      const httpOptions: NgxHttpOptions = new NgxHttpOptions();
      const httpHeaderParams: NgxHttpHeaders = {authorization: 'Bearer xyz' };
      const httpPathParams: NgxHttpParams = { userName: 'xyz' };
      httpOptions.header = httpHeaderParams;
      httpOptions.param = httpPathParams;

      ngxHttpClientService.patch(pathParams, body, httpOptions).subscribe(() => {
      }, (data: HttpErrorResponse | TimeoutError | Error) => {
        expect(data).toEqual(mockData);
      });

      const req: TestRequest = httpTestingController.expectOne(requestUrl);

      expect(req.request.method).toBe('PATCH');
      expect(req.request.body).toBe(body);

      req.flush(mockData);
    });
  });

  afterEach(() => {
    const { httpTestingController } = setup();
    httpTestingController.verify();
    TestBed.resetTestingModule();
  });
});
