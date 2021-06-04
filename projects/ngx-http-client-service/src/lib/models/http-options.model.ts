import { HttpParams, HttpHeaders } from '@angular/common/http';

export class HttpParamType {
  param_name: string;
  param_value: string | number | boolean | ReadonlyArray<string | number | boolean>;
}

export class HttpHeadersType {
  header_name: string;
  header_value: string | string[];
}

export class HttpOptionsParamType {
  params?: HttpParams;
  headers?: HttpHeaders;
  observe?: any;
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
}

export class HTTPOptionParamArgumentType {
  params?: HttpParamType[];
  headers?: HttpHeadersType[];
  observe?: any;
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
}
