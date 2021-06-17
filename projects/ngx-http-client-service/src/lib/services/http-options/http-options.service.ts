import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpParam, HttpHeader, HttpOptions, HttpOption } from '../../models/http-options.model';

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
   * @param httpParam contains an object of HttpParam.
   * @returns returns constructed httpParameters of type HttpParam
   */
  private appendHttpParams(httpParam: HttpParam): HttpParams {
    let httpParams = new HttpParams();
    Object.entries(httpParam).forEach(([param, paramValue]) => {
      if (param && paramValue.toString()) {
        httpParams = httpParams.append(param, paramValue.toString());
      }
    });
    return httpParams;
  }

  /**
   * @description appendHttpHeaders is a common method.
   * @param headers contains an object of HttpHeader.
   * @returns returns constructed httpParameters of type HttpParam
   */
  private appendHttpHeaders(httpHeader: HttpHeader): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    Object.entries(httpHeader).forEach(([header, headerValue]) => {
      if (header && headerValue.toString()) {
        httpHeaders = httpHeaders.append(header, headerValue.toString());
      }
    });
    return httpHeaders;
  }

  /**
   * @description provides the http options.
   * @param httpOptionsParameters contains params of type HttpOptions.
   * @returns returns appendd http options.
   */
  public appendHttpOptions(httpOptionsParameters: HttpOption): HttpOptions {
    if (!httpOptionsParameters) {
      httpOptionsParameters = new HttpOption();
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
