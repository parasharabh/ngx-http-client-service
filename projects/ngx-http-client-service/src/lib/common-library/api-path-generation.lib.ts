import { APIPathGenerationConstants } from '../constants/api-path-generation.constants';
import { URLQueryParamType } from '../models/common-lib.model';


/** Common Library where all reusable and repeated functionalities can be managed
 * It can contains common methods and common methods related params.
 */
export class APIPathGenerationLibrary {
  // Common methods Constants
  private BASE = APIPathGenerationConstants.BASE;
  private END = APIPathGenerationConstants.END;
  private QUERY_SPECIFIER = APIPathGenerationConstants.QUERY_SPECIFIER;
  private QUERY_DIVIDER = APIPathGenerationConstants.QUERY_DIVIDER;
  private QUERY_ASSIGNER = APIPathGenerationConstants.QUERY_ASSIGNER;

  /**
   * @description generatePath is a common method.
   * @param pathComponent contains an array of string.
   * @returns returns constructed api path url.
   */
  public generatePath(pathComponent: string[], base?: string, origin?: string): string {
    let path = origin ? origin : '';
    path = base ? (path + this.END + base) : (path + this.BASE);
    pathComponent.forEach((arg) => {
      if (arg === this.END) {
        path = path + arg;
      } else {
        path = path + this.END + arg;
      }
    });
    return this.requestEncodedUrl(path);
  }

  /**
   * @description Returns router parameterized path.
   * @param path_component contains partial url.
   * @param query_param_component contains parameters to be passed as query parameters.
   * @returns returns generated routed paramerized path.
   */
  public generateRouterParamPath(path_component: string[], query_param_component: URLQueryParamType[], base?: string) {
    let path = base ? base : '';
    path_component.forEach((param) => {
      if (param) {
        path = path + this.END + param;
      }
    });
    if (!query_param_component.length) {
      return this.requestEncodedUrl(path);
    }
    path = path + this.QUERY_SPECIFIER;
    query_param_component.forEach((param, index) => {
      if (param) {
        if (index + 1 === query_param_component.length) {
          if (param.query_param_value) {
            path = path + param.query_param_name + this.QUERY_ASSIGNER + param.query_param_value;
          }
        } else {
          if (param.query_param_value) {
            path = path + param.query_param_name + this.QUERY_ASSIGNER + param.query_param_value + this.QUERY_DIVIDER;
          }
        }
      }
    });
    return this.requestEncodedUrl(path);
  }


  /**
   * @description Will take url and finds out url without query parameter.
   * @param url contains whole url as string.
   * @returns returns url without query parameters.
   */
  public getUrlWithoutQueryParams(url: string) {
    const url_without_queryParams = url.split(this.QUERY_SPECIFIER)[0];
    return url_without_queryParams;
  }

  /**
   * @description handleEncodingError method is a private method.
   * @param path contains string defining the url path.
   * @returns encoded url
   */
  private requestEncodedUrl(path: string): string {
    const encoded = encodeURI(path);
    try {
      return encoded;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}


