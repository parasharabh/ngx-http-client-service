import { ApiPathConstants } from '../../constants/api-path-generation.constants';
import { Injectable } from '@angular/core';
import { PathQuery } from '../../models/common-lib.model';

/**
 * Injectable Http Options Service
 */
@Injectable({
  providedIn: 'root'
})

/** api url generator Service all reusable and repeated functionalities can be managed
 * It can contains common methods and common methods related params.
 */
export class ApiPathService {
  /**
   * @description creates an instance of APIPathGenerationLibrary
   */
  constructor() {
  }

  // Common Constants
  private PATH_BASE = ApiPathConstants.PATH_BASE;
  private PATH_DIVIDER = ApiPathConstants.PATH_DIVIDER;
  private QUERY_SPECIFIER = ApiPathConstants.QUERY_SPECIFIER;
  private QUERY_DIVIDER = ApiPathConstants.QUERY_DIVIDER;
  private QUERY_ASSIGNER = ApiPathConstants.QUERY_ASSIGNER;


  /**
   * @description validating QueryParam.
   * @param pathQuery as an argument of type PathQuery.
   * @return constructed PathQuery Object.
   */
  private modifyPathQuery(pathQuery: PathQuery): PathQuery {
    const constructedPathQuery = {};
    Object.entries(pathQuery).filter(([query, queryValue]) => {
      if (query) {
        constructedPathQuery[query] = queryValue;
      }
    });
    return constructedPathQuery;
  }

  /**
   * @description createApiPath is a constructing method.
   * @param pathComponent contains an array of string.
   * @returns returns constructed api path url.
   */
  public createApiPath(pathComponent: string[]): string {
    let path = this.PATH_BASE;
    pathComponent = pathComponent.filter((param: string) => {
      return param !== this.PATH_DIVIDER;
    });
    path = path + pathComponent.join(this.PATH_DIVIDER);
    return encodeURI(path);
  }

  /**
   * @description Returns router parameterized path.
   * @param apiPathParams contains partial url.
   * @param pathQuery contains parameters to be passed as query parameters.
   * @returns returns generated routed paramerized path.
   */
  public createApiPathWithQuery(apiPathParams: string[], pathQuery: PathQuery): string {
    let path = this.createApiPath(apiPathParams);
    if (!pathQuery) {
      return path;
    } else {
      pathQuery = this.modifyPathQuery(pathQuery);
      if (Object.keys(pathQuery).length) {
        path = decodeURI(path) + this.QUERY_SPECIFIER;
        Object.entries(pathQuery).forEach(([query, queryValue], index) => {
          if (Object.keys(pathQuery).length === (index + 1)) {
            path = path + query + this.QUERY_ASSIGNER + queryValue;
          } else {
            path = path + query + this.QUERY_ASSIGNER + queryValue + this.QUERY_DIVIDER;
          }
        });
      }
      return encodeURI(path);
    }
  }
}



