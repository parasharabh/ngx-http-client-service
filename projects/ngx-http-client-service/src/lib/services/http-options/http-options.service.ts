import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { NgxHttpParams, NgxHttpHeaders, HttpOptions, NgxHttpOptions } from '../../models/http-options.model';

/**
 * Injectable Http Options Service
 */
@Injectable({
  providedIn: 'root'
})

/** HttpOptionsService where all http options creations methods are defined
 *  It can contains http params and http headers creation functionality
 */
export class HttpOptionsService {
  
  /**
   * @description Creates an instance of http options service.
   */
  constructor() { }

  /**
   * @description appendHttpParams is a common method.
   * @param httpParam contains an object of NgxHttpParams.
   * @returns returns constructed httpParameters of type HttpParam
   */
  private appendHttpParams(ngxHttpParams: NgxHttpParams): HttpParams {
    let httpParams = new HttpParams();
    Object.entries(ngxHttpParams).forEach(([param, paramValue]) => {
      if (param && paramValue.toString()) {
        httpParams = httpParams.append(param, paramValue.toString());
      }
    });
    return httpParams;
  }

  /**
   * @description appendHttpHeaders is a common method.
   * @param headers contains an object of NgxHttpHeaders.
   * @returns returns constructed httpParameters of type HttpParam
   */
  private appendHttpHeaders(ngxHttpHeaders: NgxHttpHeaders): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    Object.entries(ngxHttpHeaders).forEach(([header, headerValue]) => {
      if (header && headerValue.toString()) {
        httpHeaders = httpHeaders.append(header, headerValue.toString());
      }
    });
    return httpHeaders;
  }

  /**
   * @description provides the http options.
   * @param httpOptionsParameters contains params of type NgxHttpOptions.
   * @returns returns appendd http options.
   */
  public appendHttpOptions(httpOptionsParameters: NgxHttpOptions): HttpOptions {
    if (!httpOptionsParameters) {
      httpOptionsParameters = new NgxHttpOptions();
      httpOptionsParameters.header = {};
      httpOptionsParameters.param = {};
    }
    const httpOptions = new HttpOptions();
    if (httpOptionsParameters.param) {
      httpOptions.params = this.appendHttpParams(httpOptionsParameters.param);
    } else {
      httpOptions.params = this.appendHttpParams({});
    }
    if (httpOptionsParameters.header) {
      httpOptions.headers = this.appendHttpHeaders(httpOptionsParameters.header);
    } else {
      httpOptions.headers = this.appendHttpHeaders({});
    }
    if (httpOptionsParameters.observe) {
      httpOptions.observe = httpOptionsParameters.observe;
    }
    if (httpOptionsParameters.reportProgress) {
      httpOptions.reportProgress = httpOptionsParameters.reportProgress;
    }
    if (httpOptionsParameters.responseType) {
      httpOptions.responseType = httpOptionsParameters.responseType;
    }
    if(httpOptionsParameters.withCredentials) {
      httpOptions.withCredentials = httpOptionsParameters.withCredentials;
    }
    return httpOptions;
  }
}
