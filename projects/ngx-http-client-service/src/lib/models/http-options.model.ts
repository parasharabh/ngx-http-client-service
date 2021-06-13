import { HttpParams, HttpHeaders } from '@angular/common/http';

export class HttpParam {
  // it can be {'key': 'value'} / {'key', 1} / {'key', true} 
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
}

export class HttpHeader {
  // it can be {'key': 'value'}/{'key': ['value1', 'value2']} 
  [header: string] : string | string[];
}

export class HttpOptions {
  params?: HttpParams;
  headers?: HttpHeaders;
  context?: any;
  observe?: any;
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
}

export class HttpOption {
  param?: HttpParam;
  header?: HttpHeader;
  context?: any;
  observe?: any;
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
}
