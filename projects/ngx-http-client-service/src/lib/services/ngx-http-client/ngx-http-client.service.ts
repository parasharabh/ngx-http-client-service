import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from '../http-options/http-options.service';
import { HttpOptions } from '../../models/http-options.model';
import { ApiPathService } from '../api-path/api-path.service';
import { Observable } from 'rxjs';

/**
 * @description Injectable Http Client Service
 */
@Injectable({
  providedIn: 'root'
})

/** NgxHttpClientService Library where all reusable and repeated functionalities can be managed
 * It can contains common methods and common methods related params.
 */
export class NgxHttpClientService {

  /**
   * @description Creates an instance of http client service.
   * @param httpClient - an instance of HttpClient
   * @param httpOptionsService - an instance of HttpOptionsService
   */
  constructor(
    private httpClient: HttpClient,
    private httpOptionsService: HttpOptionsService,
    private ApiPathService: ApiPathService
  ) { }

  /**
  * @description will expose get method of http client.
  * @param pathParams contains path parameters of type string array
  * @param HttpOptions contains parameter of type HttpOptions.
  */
  public get(pathParams: string[], httpOptions?: HttpOptions): Observable<Object> {
    const apiUrl = this.ApiPathService.createApiPath(pathParams);
    const options = this.httpOptionsService.appendHttpOptions(httpOptions);
    return this.httpClient.get(apiUrl, options);
  }

  /**
  * @description will expose post method of http client.
  * @param pathParams contains path parameters of type string array
  * @param HttpOptions contains parameter of type HttpOptions.
  * @param body contains parameter for http post body
  */
  public post(pathParams: string[], body: any, httpOptions?: HttpOptions): Observable<Object> {
    const apiUrl = this.ApiPathService.createApiPath(pathParams);
    const options = this.httpOptionsService.appendHttpOptions(httpOptions);
    return this.httpClient.post(apiUrl, body, options);
  }

  /**
  * @description will expose put method of http client.
  * @param pathParams contains path parameters of type string array
  * @param HttpOptions contains parameter of type HttpOptions.
  * @param body contains parameter for http put body
  */
  public put(pathParams: string[], body: any, httpOptions?: HttpOptions): Observable<Object> {
    const apiUrl = this.ApiPathService.createApiPath(pathParams);
    const options = this.httpOptionsService.appendHttpOptions(httpOptions);
    return this.httpClient.put(apiUrl, body, options);
  }

  /**
  * @description will expose delete method of http client.
  * @param pathParams contains path parameters of type string array
  * @param HttpOptions contains parameter of type HttpOptions.
  */
  public delete(pathParams: string[], httpOptions?: HttpOptions): Observable<Object> {
    const apiUrl = this.ApiPathService.createApiPath(pathParams);
    const options = this.httpOptionsService.appendHttpOptions(httpOptions);
    return this.httpClient.delete(apiUrl, options);
  }

  /**
  * @description will expose request method of http client.
  * @param method contains the method parameter of type string.
  * @param pathParams contains path parameters of type string array.
  * @param HttpOptions contains parameter of type HttpOptions.
  */
  public request(method: string, pathParams: string[], httpOptions?: HttpOptions): Observable<Object> {
    const apiUrl = this.ApiPathService.createApiPath(pathParams);
    const options = this.httpOptionsService.appendHttpOptions(httpOptions);
    return this.httpClient.request(method, apiUrl, options);
  }

  /**
  * @description will expose head method of http client.
  * @param pathParams contains path parameters of type string array.
  * @param HttpOptions contains parameter of type HttpOptions.
  */
  public head(pathParams: string[], httpOptions?: HttpOptions): Observable<Object> {
    const apiUrl = this.ApiPathService.createApiPath(pathParams);
    const options = this.httpOptionsService.appendHttpOptions(httpOptions);
    return this.httpClient.head(apiUrl, options);
  }

  /**
  * @description will expose jsonp method of http client.
  * @param pathParams contains path parameters of type string array.
  * @param HttpOptions contains parameter of type HttpOptions.
  */
  public jsonp(pathParams: string[], callbackFn:string): Observable<Object> {
    const apiUrl = this.ApiPathService.createApiPath(pathParams);
    return this.httpClient.jsonp(apiUrl, callbackFn);
  }

  /**
  * @description will expose options method of http client.
  * @param pathParams contains path parameters of type string array.
  * @param HttpOptions contains parameter of type HttpOptions.
  */
  public options(pathParams: string[], httpOptions?: HttpOptions): Observable<Object> {
    const apiUrl = this.ApiPathService.createApiPath(pathParams);
    const options = this.httpOptionsService.appendHttpOptions(httpOptions);
    return this.httpClient.options(apiUrl, options);
  }

  /**
  * @description will expose patch method of http client.
  * @param pathParams contains path parameters of type string array.
  * @param HttpOptions contains parameter of type HttpOptions.
  */
  public patch(pathParams: string[], body: any, httpOptions?: HttpOptions): Observable<Object> {
    const apiUrl = this.ApiPathService.createApiPath(pathParams);
    const options = this.httpOptionsService.appendHttpOptions(httpOptions);
    return this.httpClient.patch(apiUrl, body, options);
  }
}
