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
   * @description generateHTTPParams is a common method.
   * @param param_component contains an array of param_component_object_type : HttpParamType
   * @returns returns constructed httpParameters of type HttpParamType
   */
  public generateHTTPParams(param_component: HttpParamType[]): HttpParams {
    let httpParam = new HttpParams();
    param_component.forEach((param) => {
      if ((!httpParam.has(param.name)) && param.value) {
        httpParam = httpParam.append(param.name, param.value);
      }
    });
    return httpParam;
  }

  /**
   * @description generateHTTPHeaders is a common method.
   * @param header_component contains an array of header_component_object_type : HttpPathHeaderType
   * @returns returns constructed httpParameters of type HttpParamType
   */
  public generateHTTPHeader(header_component: HttpHeadersType[]): HttpHeaders {
    let httpHeader = new HttpHeaders();
    header_component.forEach((header) => {
      if ((!httpHeader.has(header.name)) && header.value) {
        httpHeader = httpHeader.append(header.name, header.value);
      }
    });
    return httpHeader;
  }

  /**
   * @description provides the http options.
   * @param httPathParameters contains params of type httpPamaOptionsType.
   * @returns returns generated http options.
   */
  public generateHttpOptions(httpOptionsParameters: HTTPOptionParamArgumentType): HttpOptionsParamType {
    if (!httpOptionsParameters) {
      httpOptionsParameters = new HTTPOptionParamArgumentType();
      httpOptionsParameters.headers = [];
      httpOptionsParameters.params = [];
    }
    const httpOptions = new HttpOptionsParamType();
    if (httpOptionsParameters.params) {
      httpOptions.params = this.generateHTTPParams(httpOptionsParameters.params);
    } else {
      httpOptions.params = this.generateHTTPParams([]);
    }
    if (httpOptionsParameters.headers) {
      httpOptions.headers = this.generateHTTPHeader(httpOptionsParameters.headers);
    } else {
      httpOptions.headers = this.generateHTTPHeader([]);
    }
    return httpOptions;
  }
}
