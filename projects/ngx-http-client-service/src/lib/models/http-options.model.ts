import { HttpParams, HttpHeaders } from '@angular/common/http';

export class HttpParamType {
  name: string;
  value: string;
}

export class HttpHeadersType {
  name: string;
  value: string;
}

export class HttpOptionsParamType {
  params?: HttpParams;
  headers?: HttpHeaders;
}

export class HTTPOptionParamArgumentType {
  params?: HttpParamType[];
  headers?: HttpHeadersType[];
}
