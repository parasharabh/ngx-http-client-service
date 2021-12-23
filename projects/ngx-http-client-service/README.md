# NgxHttpClientService
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![npm version](https://img.shields.io/npm/v/ngx-http-client-service.svg)](https://www.npmjs.com/package/ngx-http-client-service)
[![downloads](https://img.shields.io/npm/dt/ngx-http-client-service.svg)](https://www.npmjs.com/package/ngx-http-client-service)
[![downloads](https://img.shields.io/npm/dm/ngx-http-client-service.svg)](https://www.npmjs.com/package/ngx-http-client-service)
Angular 9 http service for making your api request process more smooth and process oriented

## Getting Started

## Features

The ngx-http-client-service will help you in building a more process and maintainable code. Using this service you will define a set of steps to be taken before writing your http calls which each of the developer can follow. It will customize the http calls.
It takes the api url in a array format which you can store in a constant file and can pass to this ngx-http-client-service whenever required. 
It also takes http options as an argument. you can store the different http options in different constants file or in one constant file with different names and can pass the httpOptions to the ngx-http-client-service whenever making an api call based on the requirement.

Whenever you need to change the data(api url or http options). You can just go the constant file and changes will reflect in actual http calls. No need to interact with the actual services where http calls are defined. 

In testing you can use the same constants file data and also can use the ngx-http-client-service.
It helps you write your code in process oriented way and much more cleaner way.

- GET method with custom http options
- PUT method with custom http options
- POST method with custom http options
- DELETE method with custom http options
- REQEUST method with custom http options
- HEAD method with custom http options
- JSONP method
- OPTIONS method with custom http options
- PATCH method with custom http options

### Installation

```bash
npm install ngx-http-client-service --save
```

### Usage

Import and inject NgxHttpClientService into a service constructor of your service where you will be writing your http calls.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The User service file will expose requestUserInfo method to your component.

  requestUserInfo(): Observable<UserModel> {

    const pathParams: string[] = ['api', 'v1', 'user', 'info'];// or you can define this array in some constant file and then import them and use it.
    const body = {};
    const httpOption: HttpOption = new HttpOption();

    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively httpOption.headers = this.constants.specificAPIHeader;
    httpOption.headers = { 
                          'Content-Type': 'application/ json; charset = utf - 8}'
                         };
    httpOption.params = { 
                          'user_name': 'abhishek',
                          'user_age': 27,
                          'isEngineer': true
                        };
                                  
      return this.ngxHttpClientService.get(pathParams, httpOption);
      
      // This is just to provide how other http calls might look.
      //return this.ngxHttpClientService.put(pathParams, body, httpOption);
      //return this.ngxHttpClientService.post(pathParams, body, httpOption);
      //return this.ngxHttpClientService.delete(pathParams, httpOption);
  }
}
```
Then use the UserApiService in respective component.
Make sure you add the HttpClientModule in the module where your component is defined.

``` typescript

import { UserApiService } from 'src/app/services/UserApiService.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  
  constructor(
    private userApiService: UserApiService
  ) {}

  getUserInfo(): void {
    this.userApiService.requestUserInfo().subscribe((successResponse: ) => {
      // your success handling code
    }, (error) => {
      // your error handeling code
    })
  }
}
```

That's it! See how easy it is.
Now just imagine testing it.
All of your code structure will be almost same except the data will change which you need to verify.
The rest of calling of the methods will remain same. 
You can use the response as the objects only.

### Classes

```typescript

export class NgxHttpParams {
  // it can be {'key': 'value'} / {'key', 1} / {'key', true} 
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
}

export class NgxHttpHeaders {
  // it can be {'key': 'value'}/{'key': ['value1', 'value2']} 
  [header: string] : string | string[];
}

export class NgxHttpOptions {
  param?: NgxHttpParams;
  header?: NgxHttpHeaders;
  context?: any;
  observe?: any;
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
}
```
### Methods

- `get` - return observable `GET` http request.
`get( pathParams: string[], httpOption?: httpOption): Observable<Object>`

- `post` - return observable `POST` http request.
`put(pathParams: string[], body: any, httpOption?: httpOption): Observable<Object>`

- `put` - return observable `PUT` http request.
`put(pathParams: string[], body: any, httpOption?: httpOption): Observable<Object>`

- `delete` - return observable `DELETE` http request.
`delete(pathParams: string[], httpOption?: httpOption): Observable<Object>`

- `request` - return observable `REQUEST` http request.
`request(method: string, pathParams: string[], httpOptions?: HttpOptions): Observable<Object>`

- `head` - return observable `HEAD` http request.
`head(pathParams: string[], httpOptions?: HttpOptions): Observable<Object>`

- `jsonp` - return observable `JSONP` http request.
`jsonp(pathParams: string[], callbackFn:string): Observable<Object>`

- `options` - return observable `OPTIONS` http request.
`options(pathParams: string[], httpOptions?: HttpOptions): Observable<Object>`

- `patch` - return observable `PATCH` http request.
`patch(pathParams: string[], body: any, httpOptions?: HttpOptions): Observable<Object>`

## General tips

Checking out the following resources usually solves most of the problems people seem to have with this ngx-http-client service:

* [article about httpClient Options in general @angular](https://angular.io/api/common/http/HttpClient) (recommended read!)
* [article about httpparams in general @angular](https://angular.io/api/common/http/HttpParams#constructor()) (recommended read!)
* [article about httpheaders in general @angular](https://angular.io/api/common/http/HttpHeaders) (recommended read!)


The following general steps are usually very helpful when debugging problems with this ngx-http-client-service in general:

* Please check if there are any [open](https://github.com/parasharabh/ngx-http-client-service/issues) or [closed](https://github.com/parasharabh/ngx-http-client-service/issues?q=is%3Aissue+is%3Aclosed) issues that answer your question
* Please check if the provided parameters value(s) of `http request` are getting reflected on actual parameters value(s) in browser console.
* Please check if the provided parameters value(s) of `http request headers` are getting reflected on actual parameters value(s) in browser console.
* Please check if the provided parameters value(s) of `http request headers parameters` / `http request headers query parameters` are getting reflected on actual parameters value(s) in browser console. 
* Does it work if you use update the http Options manually (i.e. in a console of your choice)?

## Opening issues

Please try to give us as much information as you can when you open an issue.
You can even supply a test environment or test cases, if necessary?. Please share sample code using codesandbox.com or stackblitz.com to help me re-produce the issue.

* [Open a new issue here](https://github.com/parasharabh/ngx-http-client-service/issues)

## Contributing

I am happy to accept pull requests or test cases for things that do not work. Feel free to submit one of those.

However, I will only accept pull requests that have maintenable, readable, lint test passed, test cases(old and new) and test cases passed(old and new). Please add new test cases and remove older ones only if applicable.

* [Open a new pull request here](https://github.com/parasharabh/ngx-http-client-service/compare)

## Author

This ngxHttpClient service is brought to you by Abhishek Parashar. I built it for one of my apps, because the other httpCLient packages I found were not as much maintainable and were not process oriented. It will help you in making your code writing more process oriented, maintenable, readable and will help you in defining a process while defining your application http request. It will also help in testing your code and writing your test cases in more process oriented way.

* [parasharabh](https://github.com/parasharabh)

## License

[MIT](https://github.com/parasharabh/ngx-http-client-service/blob/main/LICENSE)

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="www.linkedin.com/in/abhishek-parashar-50103810b"><img src="https://avatars.githubusercontent.com/u/15143598?s=400&u=0346c306c788475785ae7859bf9c9d37466b4047&v=4" width="100px;" alt=""/><br /><sub><b>Abhishek Parashar</b></sub></a><br /><a href="https://github.com/parasharabh" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
