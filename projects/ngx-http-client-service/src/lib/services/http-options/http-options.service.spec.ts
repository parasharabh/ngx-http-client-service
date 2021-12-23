import { TestBed } from '@angular/core/testing';
import { HttpOptionsService } from './http-options.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NgxHttpOptions, HttpOptions, NgxHttpParams, NgxHttpHeaders } from '../../models/http-options.model';
import { HttpParams } from '@angular/common/http';

describe('HttpOptionsService Test Suite', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule]
  }));

  function setup() {
    const httpOptionsService: HttpOptionsService = TestBed.inject(HttpOptionsService);
    const httpOptionsServiceAny  = httpOptionsService as any;
    const httpTestingController: HttpTestingController = TestBed.inject(HttpTestingController);
    return { httpOptionsService, httpOptionsServiceAny, httpTestingController };
  }

  describe('HttpOptionsService service creation', () => {

    it('HttpOptionsService should be created', () => {
      const {httpOptionsService} = setup();
      expect(httpOptionsService).toBeTruthy();
    });
  });

  describe('AppendHttpParams Method Test Suite ', () => {

    it('appendHttpParams should get called with valid params', () => {
      const { httpOptionsServiceAny } = setup();
      const params: NgxHttpParams = {userName: 'xyz'};
      spyOn(Object, 'entries').and.callThrough();
      const httpParams = httpOptionsServiceAny.appendHttpParams(params);
      expect(Object.entries).toHaveBeenCalledTimes(1);
      expect(httpParams.keys().includes('userName')).toBeTruthy();
    });

    it('appendHttpParams should get called with invalid params', () => {
      const { httpOptionsServiceAny } = setup();
      const params: NgxHttpParams = {'' : ''};
      spyOn(Object, 'entries').and.callThrough();
      const httpParams = httpOptionsServiceAny.appendHttpParams(params);
      expect(Object.entries).toHaveBeenCalledTimes(1);
      expect(httpParams.keys().length).toBe(0);
    });

    it('appendHttpParams should get called with empty params', () => {
      const { httpOptionsServiceAny } = setup();
      const params: NgxHttpParams = {};
      spyOn(Object, 'entries').and.callThrough();
      const httpParams = httpOptionsServiceAny.appendHttpParams(params);
      expect(Object.entries).toHaveBeenCalledTimes(1);
      expect(httpParams.keys().length).toBe(0);
    });
  });

  describe('AppendHttpHeaders Method Test Suite ', () => {

    it('appendHttpHeaders should get called with valid headers', () => {
      const { httpOptionsServiceAny } = setup();
      const header: NgxHttpHeaders = {userName: 'xyz'};
      spyOn(Object, 'entries').and.callThrough();
      const httpHeaders = httpOptionsServiceAny.appendHttpHeaders(header);
      expect(Object.entries).toHaveBeenCalledTimes(1);
      expect(httpHeaders.keys().includes('userName')).toBeTruthy();
    });

    it('appendHttpHeaders should get called with invalid headers', () => {
      const { httpOptionsServiceAny } = setup();
      const header: NgxHttpHeaders = { '': '' };
      spyOn(Object, 'entries').and.callThrough();
      const httpHeaders = httpOptionsServiceAny.appendHttpHeaders(header);
      expect(Object.entries).toHaveBeenCalledTimes(1);
      expect(httpHeaders.keys().length).toBe(0);
    });

    it('appendHttpHeaders should get called with empty headers', () => {
      const { httpOptionsServiceAny } = setup();
      const header: NgxHttpHeaders = {};
      spyOn(Object, 'entries').and.callThrough();
      const httpHeaders = httpOptionsServiceAny.appendHttpHeaders(header);
      expect(Object.entries).toHaveBeenCalledTimes(1);
      expect(httpHeaders.keys().length).toBe(0);
    });
  });

  describe('appendHttpOptions Method Test Suite ', () => {

    it('appendHttpOptions should get called with httpOptions as null', () => {
      const { httpOptionsServiceAny } = setup();
      const httpOption: NgxHttpOptions = null;
      spyOn(httpOptionsServiceAny, 'appendHttpParams').and.callThrough();
      spyOn(httpOptionsServiceAny, 'appendHttpHeaders').and.callThrough();
      spyOn(Object, 'entries').and.callThrough();
      const httpOptions: HttpOptions = httpOptionsServiceAny.appendHttpOptions(httpOption);
      expect(httpOptionsServiceAny.appendHttpParams).toHaveBeenCalledWith({});
      expect(httpOptionsServiceAny.appendHttpHeaders).toHaveBeenCalledWith({});
      expect(Object.entries).toHaveBeenCalledTimes(2);
      expect(httpOptions.params.keys().length).toBe(0);
      expect(httpOptions.headers.keys().length).toBe(0);
    });

    it('appendHttpOptions should get called with valid params', () => {
      const { httpOptionsServiceAny } = setup();
      const httpOption: NgxHttpOptions = {
                                  param: {userName: 'xyz'},
                                  header: {authorization: 'bearer xyz'},
                                  context: {},
                                  observe: {},
                                  reportProgress: true,
                                  responseType: 'json',
                                  withCredentials: true
                                 };
      spyOn(httpOptionsServiceAny, 'appendHttpParams').and.callThrough();
      spyOn(httpOptionsServiceAny, 'appendHttpHeaders').and.callThrough();
      spyOn(Object, 'entries').and.callThrough();
      const httpOptions: HttpOptions = httpOptionsServiceAny.appendHttpOptions(httpOption);
      expect(httpOptionsServiceAny.appendHttpParams).toHaveBeenCalledWith(httpOption.param);
      expect(httpOptionsServiceAny.appendHttpHeaders).toHaveBeenCalledWith(httpOption.header);
      expect(Object.entries).toHaveBeenCalledTimes(2);
      expect(httpOptions.params.keys().length).toBe(1);
      expect(httpOptions.headers.keys().length).toBe(1);
      expect(httpOptions.context).toEqual(undefined);
      expect(httpOptions.observe).toEqual(httpOption.observe);
      expect(httpOptions.responseType).toBe(httpOption.responseType);
      expect(httpOptions.reportProgress).toBe(httpOption.reportProgress);
      expect(httpOptions.withCredentials).toBe(httpOption.withCredentials);
    });

    it('appendHttpOptions should get called with partial httpOptions', () => {
      const { httpOptionsServiceAny } = setup();
      const httpOption: NgxHttpOptions = {
        param: {userName: 'xyz'},
        header: {authorization: 'bearer xyz' }
      };
      spyOn(httpOptionsServiceAny, 'appendHttpParams').and.callThrough();
      spyOn(httpOptionsServiceAny, 'appendHttpHeaders').and.callThrough();
      spyOn(Object, 'entries').and.callThrough();
      const httpOptions: HttpOptions = httpOptionsServiceAny.appendHttpOptions(httpOption);
      expect(httpOptionsServiceAny.appendHttpParams).toHaveBeenCalledWith(httpOption.param);
      expect(httpOptionsServiceAny.appendHttpHeaders).toHaveBeenCalledWith(httpOption.header);
      expect(Object.entries).toHaveBeenCalledTimes(2);
      expect(httpOptions.params.keys().length).toBe(1);
      expect(httpOptions.headers.keys().length).toBe(1);
      expect(httpOptions.context).toEqual(undefined);
      expect(httpOptions.observe).toEqual(httpOption.observe);
      expect(httpOptions.responseType).toBe(httpOption.responseType);
      expect(httpOptions.reportProgress).toBe(httpOption.reportProgress);
      expect(httpOptions.withCredentials).toBe(httpOption.withCredentials);
    });

    it('appendHttpOptions should get called with header and param as empty objects', () => {
      const { httpOptionsServiceAny } = setup();
      const httpOption: NgxHttpOptions = {
        param: {},
        header: {},
        context: {},
        observe: {},
        reportProgress: true,
        responseType: 'json',
        withCredentials: true
      };
      spyOn(httpOptionsServiceAny, 'appendHttpParams').and.callThrough();
      spyOn(httpOptionsServiceAny, 'appendHttpHeaders').and.callThrough();
      spyOn(Object, 'entries').and.callThrough();
      const httpOptions: HttpOptions = httpOptionsServiceAny.appendHttpOptions(httpOption);
      expect(httpOptionsServiceAny.appendHttpParams).toHaveBeenCalledWith(httpOption.param);
      expect(httpOptionsServiceAny.appendHttpHeaders).toHaveBeenCalledWith(httpOption.header);
      expect(Object.entries).toHaveBeenCalledTimes(2);
      expect(httpOptions.params.keys().length).toBe(0);
      expect(httpOptions.headers.keys().length).toBe(0);
      expect(httpOptions.context).toEqual(undefined);
      expect(httpOptions.observe).toEqual(httpOption.observe);
      expect(httpOptions.responseType).toBe(httpOption.responseType);
      expect(httpOptions.reportProgress).toBe(httpOption.reportProgress);
      expect(httpOptions.withCredentials).toBe(httpOption.withCredentials);
    });

    it('appendHttpOptions should get called with header and param as null', () => {
      const { httpOptionsServiceAny } = setup();
      const httpOption: NgxHttpOptions = {
        param: null,
        header: null,
        context: {},
        observe: {},
        reportProgress: true,
        responseType: 'json',
        withCredentials: true
      };
      spyOn(httpOptionsServiceAny, 'appendHttpParams').and.callThrough();
      spyOn(httpOptionsServiceAny, 'appendHttpHeaders').and.callThrough();
      spyOn(Object, 'entries').and.callThrough();
      const httpOptions: HttpOptions = httpOptionsServiceAny.appendHttpOptions(httpOption);
      expect(httpOptionsServiceAny.appendHttpParams).toHaveBeenCalledWith({});
      expect(httpOptionsServiceAny.appendHttpHeaders).toHaveBeenCalledWith({});
      expect(Object.entries).toHaveBeenCalledTimes(2);
      expect(httpOptions.params.keys().length).toBe(0);
      expect(httpOptions.headers.keys().length).toBe(0);
      expect(httpOptions.context).toEqual(undefined);
      expect(httpOptions.observe).toEqual(httpOption.observe);
      expect(httpOptions.responseType).toBe(httpOption.responseType);
      expect(httpOptions.reportProgress).toBe(httpOption.reportProgress);
      expect(httpOptions.withCredentials).toBe(httpOption.withCredentials);
    });
  });

  afterEach(() => {
    const { httpTestingController } = setup();
    httpTestingController.verify();
    TestBed.resetTestingModule();
  });
});
