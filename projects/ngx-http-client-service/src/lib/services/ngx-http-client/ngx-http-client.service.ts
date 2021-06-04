import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpOptionsService } from '../http-options/http-options.service';
import { HTTPOptionParamArgumentType } from '../../models/http-options.model';
import { APIPathGenerationLibrary } from '../../common-library/api-path-generation.lib';

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
   * @param http - an instance of HttpClient
   * @param httpOptionsService - an instance of HttpOptionsService
   */
  constructor(
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService,
    private pathLibrary: APIPathGenerationLibrary
  ) { }

  /**
   * @description will expose get method of http client.
   * @param path_params contains path parameters of type string array
   * @param http_params contains parameter of type HTTPOptionParamArgumentType.
   */
  public get(path_params: string[], http_params?: HTTPOptionParamArgumentType) {
    const api_url = this.pathLibrary.generatePath(path_params);
    const httpOptions = this.httpOptionsService.generateHttpOptions(http_params);
    return this.http.get(api_url, httpOptions);
  }

  /**
   * @description will expose post method of http client.
   * @param path_params contains path parameters of type string array
   * @param http_params contains parameter of type HTTPOptionParamArgumentType.
   * @param body contains parameter for http post body
   */
  public post(path_params: string[], body: any, http_params?: HTTPOptionParamArgumentType) {
    const api_url = this.pathLibrary.generatePath(path_params);
    const httpOptions = this.httpOptionsService.generateHttpOptions(http_params);
    return this.http.post(api_url, body, httpOptions);
  }

  /**
   * @description will expose put method of http client.
   * @param path_params contains path parameters of type string array
   * @param http_params contains parameter of type HTTPOptionParamArgumentType.
   * @param body contains parameter for http put body
   */
  public put(path_params: string[], body: any, http_params?: HTTPOptionParamArgumentType) {
    const api_url = this.pathLibrary.generatePath(path_params);
    const httpOptions = this.httpOptionsService.generateHttpOptions(http_params);
    return this.http.put(api_url, body, httpOptions);
  }

  /**
   * @description will expose delete method of http client.
   * @param path_params contains path parameters of type string array
   * @param http_params contains parameter of type HTTPOptionParamArgumentType.
   */
  public delete(path_params: string[], http_params?: HTTPOptionParamArgumentType) {
    const api_url = this.pathLibrary.generatePath(path_params);
    const httpOptions = this.httpOptionsService.generateHttpOptions(http_params);
    return this.http.delete(api_url, httpOptions);
  }
}
