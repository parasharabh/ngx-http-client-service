import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpParamType, HttpHeadersType, HTTPOptionParamArgumentType, HttpOptionsParamType } from '../../models/http-options.model';

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
   * @description appendHTTPParams is a common method.
   * @param param_component contains an array of param_component_object_type : HttpParamType
   * @returns returns constructed httpParameters of type HttpParamType
   */
  public appendHTTPParams(param_component: HttpParamType[]): HttpParams {
    let httpParam = new HttpParams();
    param_component.forEach((param) => {
      if ((!httpParam.has(param.param_name)) && param.param_value) {
        httpParam = httpParam.append(param.param_name, param.param_value.toString());
      }
    });
    return httpParam;
  }

  /**
   * @description appendHTTPHeaders is a common method.
   * @param header_component contains an array of header_component_object_type : HttpPathHeaderType
   * @returns returns constructed httpParameters of type HttpParamType
   */
  public appendHTTPHeader(header_component: HttpHeadersType[]): HttpHeaders {
    let httpHeader = new HttpHeaders();
    header_component.forEach((header) => {
      if ((!httpHeader.has(header.header_name)) && header.header_value) {
        httpHeader = httpHeader.append(header.header_name, header.header_value);
      }
    });
    return httpHeader;
  }

  /**
   * @description provides the http options.
   * @param httPathParameters contains params of type httpPamaOptionsType.
   * @returns returns appendd http options.
   */
  public appendHttpOptions(httpOptionsParameters: HTTPOptionParamArgumentType): HttpOptionsParamType {
    if (!httpOptionsParameters) {
      httpOptionsParameters = new HTTPOptionParamArgumentType();
      httpOptionsParameters.headers = [];
      httpOptionsParameters.params = [];
    }
    const httpOptions = new HttpOptionsParamType();
    if (httpOptionsParameters.params) {
      httpOptions.params = this.appendHTTPParams(httpOptionsParameters.params);
    } else {
      httpOptions.params = this.appendHTTPParams([]);
    }
    if (httpOptionsParameters.headers) {
      httpOptions.headers = this.appendHTTPHeader(httpOptionsParameters.headers);
    } else {
      httpOptions.headers = this.appendHTTPHeader([]);
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
