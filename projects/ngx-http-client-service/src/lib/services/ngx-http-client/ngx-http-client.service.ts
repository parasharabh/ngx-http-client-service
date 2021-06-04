import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpOptionsService } from '../http-options/http-options.service';
import { HTTPOptionParamArgumentType } from '../../models/http-options.model';
import { APIUrlService } from '../api-path-generator/api-path-generation.service';
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
    private APIUrlService: APIUrlService
  ) { }

  /**
   * @description will expose get method of http client.
   * @param path_params contains path parameters of type string array
   * @param http_options_params contains parameter of type HTTPOptionParamArgumentType.
   */
  public get(path_params: string[], http_options_params?: HTTPOptionParamArgumentType): Observable<Object> {
    const api_url = this.APIUrlService.constructPath(path_params);
    const httpOptions = this.httpOptionsService.appendHttpOptions(http_options_params);
    return this.httpClient.get(api_url, httpOptions);
  }

  /**
   * @description will expose post method of http client.
   * @param path_params contains path parameters of type string array
   * @param http_options_params contains parameter of type HTTPOptionParamArgumentType.
   * @param body contains parameter for http post body
   */
  public post(path_params: string[], body: any, http_options_params?: HTTPOptionParamArgumentType): Observable<Object> {
    const api_url = this.APIUrlService.constructPath(path_params);
    const httpOptions = this.httpOptionsService.appendHttpOptions(http_options_params);
    return this.httpClient.post(api_url, body, httpOptions);
  }

  /**
   * @description will expose put method of http client.
   * @param path_params contains path parameters of type string array
   * @param http_options_params contains parameter of type HTTPOptionParamArgumentType.
   * @param body contains parameter for http put body
   */
  public put(path_params: string[], body: any, http_options_params?: HTTPOptionParamArgumentType): Observable<Object> {
    const api_url = this.APIUrlService.constructPath(path_params);
    const httpOptions = this.httpOptionsService.appendHttpOptions(http_options_params);
    return this.httpClient.put(api_url, body, httpOptions);
  }

  /**
   * @description will expose delete method of http client.
   * @param path_params contains path parameters of type string array
   * @param http_options_params contains parameter of type HTTPOptionParamArgumentType.
   */
  public delete(path_params: string[], http_options_params?: HTTPOptionParamArgumentType): Observable<Object> {
    const api_url = this.APIUrlService.constructPath(path_params);
    const httpOptions = this.httpOptionsService.appendHttpOptions(http_options_params);
    return this.httpClient.delete(api_url, httpOptions);
  }
}
