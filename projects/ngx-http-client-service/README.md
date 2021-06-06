# NgxHttpClientService

Angular 9  service for http-client-service.

# Installation

```bash
npm install ngx-http-client-service --save
```

# Uses

Add the http-client service to your `app.module.ts` or in the module where you want to add as a provider:

```typescript
import { NgxHttpClientService } from 'ngx-http-client-service';

@NgModule({
  ...
  providers: [ NgxHttpClientService ],
  ...
})
export class AppModule { }
```

Then, import and inject it into a service constructor.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The User service file will expose requestUserInfo method to your component.

  requestUserInfo(): Observable<UserModel> {

    const path_params: string[] = ['api', 'v1', 'user', 'info'];
    const body = {};
    const http_options_params: HTTPOptionParamArgumentType = new HTTPOptionParamArgumentType();

    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively http_options_params.headers = this.constants.specificAPIHeader;
    http_options_params.headers = [
                                    { 
                                      header_name: 'Content-Type',
                                      header_value: 'application/ json; charset = utf - 8}'
                                    }
                                  ];
    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively http_options_params.params = this.constants.specificAPIParams;
    http_options_params.params =  [
                                    { param_name: 'user_name', param_value: 'abhishek' },
                                    { param_name: 'user_age', param_value: 27 },
                                    { param_name: 'isEngineer', param_value: true}
                                  ];

    
      return this.ngxHttpClientService.get(path_params, http_options_params);
          // This is just to provide an example on how other http calls might look.
      return this.ngxHttpClientService.put(path_params, body, http_options_params);
      return this.ngxHttpClientService.post(path_params, body, http_options_params);
      return this.ngxHttpClientService.delete(path_params, http_options_params);
      
  }
}
```
Then use the UserApiService in respective component.

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
      
    }, (error) => {

    })
  }
}
```

That's it! See how easy it is.
Now just imagine testing it.
All of your code structure will be almost same except the data will change which you need to verify.
The rest of calling of the methods will remain same. 
You can use the response as the objects only.

# Classes

```typescript
class HttpParamType {
    param_name: string;
    param_value: string | number | boolean | ReadonlyArray<string | number | boolean>;
}

class HttpHeadersType {
    header_name: string;
    header_value: string | string[];
}

class HttpOptionsParamType {
    params?: HttpParams;
    headers?: HttpHeaders;
    observe?: any;
    reportProgress?: boolean;
    responseType?: any;
    withCredentials?: boolean;
}

class HTTPOptionParamArgumentType {
    params?: HttpParamType[];
    headers?: HttpHeadersType[];
    observe?: any;
    reportProgress?: boolean;
    responseType?: any;
    withCredentials?: boolean;
}
```
# Methods

### `get( path_params: string[], http_options_params?: HTTPOptionParamArgumentType): Observable<Object>`

### GET method of NgxHttpClientService will expose `get` method of http client to module service where it is supposed to make an api call.
(for example User service, The User service will be used by the UserComponent).

### Example:
```typescript
export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The service file will expose this method to your component.

  getMethodInServiceFileExample(): Observable<UserResponseModel> {
    const path_params: string[] = ['api', 'v1', 'user', 'info'];
    const http_options_params: HTTPOptionParamArgumentType = new HTTPOptionParamArgumentType();

    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively http_options_params.headers = this.constants.specificAPIHeader;
    http_options_params.headers = [
                                    { 
                                      header_name: 'Content-Type',
                                      header_value: 'application/ json; charset = utf - 8}'
                                    },
                                    { 
                                      header_name: 'Authorization',
                                      header_value: `Bearer ${token}`
                                    }
                                  ];
    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively http_options_params.params = this.constants.specificAPIParams;
    http_options_params.params =  [
                                    { param_name: 'org_name', param_value: 'xyz' },
                                    { param_name: 'count', param_value: 50 },
                                  ];

    return this.ngxHttpClientService.get(path_params, http_options_params)
    .pipe(map(response: any) => response as UserResponseModel);
  }
}
```

### `post(path_params: string[], body: any, http_options_params?: HTTPOptionParamArgumentType): Observable<Object>`

### POST method of NgxHttpClientService will expose `post` method of http client to module service where it is supposed to make an api call.
(for example User service, The User service will be used by the UserComponent).

### Example:
```typescript
export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The service file will expose this method to your component.

  updateMethodInServiceFileExample(): Observable<UserResponseModel> {
    const path_params: string[] = ['api', 'v1', 'user', 'info'];
    const body = {userId: 1};
    const http_options_params: HTTPOptionParamArgumentType = new HTTPOptionParamArgumentType();

    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively http_options_params.headers = this.constants.specificAPIHeader;
    http_options_params.headers = [
                                    { 
                                      header_name: 'Content-Type',
                                      header_value: 'application/ json; charset = utf - 8}'
                                    },
                                    { 
                                      header_name: 'Authorization',
                                      header_value: `Bearer ${token}`
                                    }
                                  ];
    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively http_options_params.params = this.constants.specificAPIParams;
    http_options_params.params =  [
                                    { param_name: 'org_name', param_value: 'xyz' },
                                    { param_name: 'count', param_value: 50 },
                                  ];

    return this.ngxHttpClientService.post(path_params, body, http_options_params)
    .pipe(
          map((response: any) => response as UserResponseModel)
        );
  }
}
```

### `put(path_params: string[], body: any, http_options_params?: HTTPOptionParamArgumentType): Observable<Object>`

### PUT method of NgxHttpClientService will expose `put` method of http client to module service where it is supposed to make an api call.
(for example User service, The User service will be used by the UserComponent).

### Example:
```typescript
export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The service file will expose this method to your component.

  updateMethodInServiceFileExample(): Observable<UserResponseModel> {
    const path_params: string[] = ['api', 'v1', 'user', 'info'];
    const body = {};
    const http_options_params: HTTPOptionParamArgumentType = new HTTPOptionParamArgumentType();

    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively http_options_params.headers = this.constants.specificAPIHeader;
    http_options_params.headers = [
                                    { 
                                      header_name: 'Content-Type',
                                      header_value: 'application/ json; charset = utf - 8}'
                                    },
                                    { 
                                      header_name: 'Authorization',
                                      header_value: `Bearer ${token}`
                                    }
                                  ];
    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here.
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively http_options_params.params = this.constants.specificAPIParams;
    http_options_params.params =  [
                                    { param_name: 'org_name', param_value: 'xyz' },
                                    { param_name: 'count', param_value: 50 },
                                  ];

    return this.ngxHttpClientService.put(path_params, body, http_options_params)
          .pipe(
                map((response: any) => response as UserResponseModel)
              );
  }
}
```

### `delete(path_params: string[], http_options_params?: HTTPOptionParamArgumentType): Observable<Object>`

### DELETE method of NgxHttpClientService will expose `delete` method of http client to module service where it is supposed to make an api call.
(for example User service, The User service will be used by the UserComponent).

### Example:
```typescript
export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The service file will expose this method to your component.

  deleteMethodInServiceFileExample() : Observable<UserResponseModel> {
    const path_params: string[] = ['api', 'v1', 'user', 'info'];
    const http_options_params: HTTPOptionParamArgumentType = new HTTPOptionParamArgumentType();

    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively http_options_params.headers = this.constants.specificAPIHeader;
    http_options_params.headers = [
                                    { 
                                      header_name: 'Content-Type',
                                      header_value: 'application/ json; charset = utf - 8}'
                                    },
                                    { 
                                      header_name: 'Authorization',
                                      header_value: `Bearer ${token}`
                                    }
                                  ];
    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively http_options_params.params = this.constants.specificAPIParams;
    http_options_params.params =  [
                                    { param_name: 'org_name', param_value: 'xyz' }
                                  ];

    return  this.ngxHttpClientService.delete(path_params, http_options_params)
            .pipe(
              map((response: any) => response as UserResponseModel)
            );         
  }
}
```

# FAQ

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
* does it work if you use update the http Options manually (i.e. in a console of your choice)?

# Getting a "token missing" or "no provider" error.

Package managers sometime act strangely and cache the packages sometimes. This results in using old versions of codes despite having installed new packages. Please try to clear cache. 
If you have "token missing" or "no provider" errors, a simple re-installation of your node modules might suffice:

```
rm -rf node_modules
yarn # or `npm install`
```

## Having Problem with framework XY or library YZ? What should be the next step?

I can always help in resolving the issue based on the provided information or guide you in direction which can work beter for you or some work around. In some case, you are better off asking the nice folks over at [StackOverflow](https://stackoverflow.com/) for help.

# Opening issues

Please try to give us as much information as you can when you open an issue.
You can even supply a test environment or test cases, if necessary?

# Contributing

I are happy to accept pull requests or test cases for things that do not work. Feel free to submit one of those.

However, I will only accept pull requests that have maintenable, readable, lint test passed, test cases(old and new) and test cases passed(old and new). Please add new test cases and remove older ones only if applicable.

* [Open a new pull request here](https://github.com/parasharabh/ngx-http-client-service/compare)

# Author

This ngxHttpClient service is brought to you by Abhishek Parashar<parashar.abh@gmail.com><https://github.com/parasharabh>. I built it for one of my apps, because the other httpCLient packages I found were not as much maintainable and were not process oriented. It will help you in making your code writing more process oriented, maintenable, readable and will help you in defining a process while defining your application http request. It will also help in testing your code and writing your test cases in more process oriented way.

# Contributors

Thanks to all contributors:

* [parasharabh](https://github.com/parasharabh)

# License

[MIT](https://github.com/parasharabh/ngx-http-client-service/blob/main/LICENSE)