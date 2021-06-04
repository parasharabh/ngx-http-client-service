import { APIPathGenerationConstants } from '../constants/api-path-generation.constants';
import { Injectable } from '@angular/core';

/**
 * Injectable Http Options Service
 */
@Injectable({
  providedIn: 'root'
})

/** Common Library where all reusable and repeated functionalities can be managed
 * It can contains common methods and common methods related params.
 */
export class APIPathGenerationLibrary {
  
  /**
   * @description creates an instance of APIPathGenerationLibrary
   */
  constructor() {
  }

  // Common Constants
  private BASE = APIPathGenerationConstants.BASE;
  private END = APIPathGenerationConstants.END;

  /**
   * @description generatePath is a common method.
   * @param pathComponent contains an array of string.
   * @returns returns constructed api path url.
   */
  public generatePath(pathComponent: string[]): string {
    let path = this.BASE;
    pathComponent.forEach((arg: string) => {
      if (arg === this.END) {
        path = path + arg;
      } else {
        path = path + this.END + arg;
      }
    });
    return this.requestEncodedUrl(path);
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


