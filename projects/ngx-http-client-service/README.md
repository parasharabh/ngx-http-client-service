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

Then, import and inject it into a service constructor where you will be writing your api calls.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The User service file will expose requestUserInfo method to your component.

  requestUserInfo(): Observable<UserModel> {

    const pathParams: string[] = ['api', 'v1', 'user', 'info'];
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
          // This is just to provide an example on how other http calls might look.
      return this.ngxHttpClientService.put(pathParams, body, httpOption);
      return this.ngxHttpClientService.post(pathParams, body, httpOption);
      return this.ngxHttpClientService.delete(pathParams, httpOption);
      
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

# Classes

```typescript
import { HttpParams, HttpHeaders } from '@angular/common/http';

export class HttpParam {
  // it can be {'key': 'value'} / {'key', 1} / {'key', true} 
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
}

export class HttpHeader {
  // it can be {'key': 'value'}/{'key': ['value1', 'value2']} 
  [header: string] : string | string[];
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
```
# Methods

## get( pathParams: string[], httpOption?: httpOption): Observable<Object>

### GET method of NgxHttpClientService will expose `get` method of http client to module service where it is supposed to make an api call.
(for example User service, The User service will be used by the UserComponent).

### Example:
```typescript
export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The service file will expose this method to your component.

  getMethodInServiceFileExample(): Observable<UserResponseModel> {
    const pathParams: string[] = ['api', 'v1', 'user', 'info'];
    const httpOption: httpOption = new httpOption();

    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively httpOption.headers = this.constants.specificAPIHeader;
    httpOption.headers = {
                            'Content-Type': 'application/ json; charset = utf - 8}',
                            'Authorization': `Bearer ${token}`
                          };
    httpOption.params = { 
                          'org_name': 'xyz',
                          'count': 50 
                        };

    return this.ngxHttpClientService.get(pathParams, httpOption)
    .pipe(map(response: any) => response as UserResponseModel);
  }
}
```

## post(pathParams: string[], body: any, httpOption?: httpOption): Observable<Object>

### POST method of NgxHttpClientService will expose `post` method of http client to module service where it is supposed to make an api call.
(for example User service, The User service will be used by the UserComponent).

### Example:
```typescript
export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The service file will expose this method to your component.

  updateMethodInServiceFileExample(): Observable<UserResponseModel> {
    const pathParams: string[] = ['api', 'v1', 'user', 'info'];
    const body = { userId: 1 };
    const httpOption: httpOption = new httpOption();

    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively httpOption.headers = this.constants.specificAPIHeader;
    httpOption.headers = {
                          'Content-Type': 'application/ json; charset = utf - 8}',
                          'Authorization': `Bearer ${token}`
                         };
    httpOption.params = { 
                          'org_name': 'xyz',
                          'count': 50 
                        };

    return this.ngxHttpClientService.post(pathParams, body, httpOption)
    .pipe(
          map((response: any) => response as UserResponseModel)
        );
  }
}
```

## put(pathParams: string[], body: any, httpOption?: httpOption): Observable<Object>

### PUT method of NgxHttpClientService will expose `put` method of http client to module service where it is supposed to make an api call.
(for example User service, The User service will be used by the UserComponent).

### Example:
```typescript
export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The service file will expose this method to your component.

  updateMethodInServiceFileExample(): Observable<UserResponseModel> {
    const pathParams: string[] = ['api', 'v1', 'user', 'info'];
    const body = {};
    const httpOption: httpOption = new httpOption();

    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. 
    // Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively httpOption.headers = this.constants.specificAPIHeader;
    httpOption.headers = {
                            'Content-Type': 'application/ json; charset = utf - 8}',
                            'Authorization': `Bearer ${token}`
                          };
    httpOption.params = { 
                          'org_name': 'xyz',
                          'count': 50 
                        };

    return this.ngxHttpClientService.put(pathParams, body, httpOption)
          .pipe(
                map((response: any) => response as UserResponseModel)
              );
  }
}
```

## delete(pathParams: string[], httpOption?: httpOption): Observable<Object>

### DELETE method of NgxHttpClientService will expose `delete` method of http client to module service where it is supposed to make an api call.
(for example User service, The User service will be used by the UserComponent).

### Example:
```typescript
export class UserApiService() {
  constructor( private ngxHttpClientService: NgxHttpClientService ) { }
  // This method needs to be defined in your service file. The service file will expose this method to your component.

  deleteMethodInServiceFileExample() : Observable<UserResponseModel> {
    const pathParams: string[] = ['api', 'v1', 'user', 'info'];
    const httpOption: httpOption = new httpOption();

    // We can store the array of headers in some other place like constant files to store all static data and pass the reference here. Think if in future you want to change these values you only have to change it in static constant files and the code functionality can remain untouched. 
    // Alternatively httpOption.headers = this.constants.specificAPIHeader;
    httpOption.headers =  {
                            'Content-Type': 'application/ json; charset = utf - 8}',
                            'Authorization': `Bearer ${token}`
                          };
    httpOption.params = { 
                          'org_name': 'xyz',
                          'count': 50 
                        };

    return  this.ngxHttpClientService.delete(pathParams, httpOption)
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
* Does it work if you use update the http Options manually (i.e. in a console of your choice)?

# Getting a "token missing" or "no provider" error.

Package managers sometime act strangely and cache the packages sometimes. This results in using old versions of codes despite having installed new packages. Please try to clear cache. 
If you have "token missing" or "no provider" errors, a simple re-installation of your node modules might suffice:

```
rm -rf node_modules
yarn # or `npm install`
```

## Having Problem with framework XY or library YZ? What should be the next step?

I can always help in resolving the issue based on the provided information or guide you in direction which can work beter for you or some work around. In some case, you can ask at [StackOverflow](https://stackoverflow.com/) for help.

# Opening issues

Please try to give us as much information as you can when you open an issue.
You can even supply a test environment or test cases, if necessary?

* [Open a new issue here](https://github.com/parasharabh/ngx-http-client-service/issues)

# Contributing

I am happy to accept pull requests or test cases for things that do not work. Feel free to submit one of those.

However, I will only accept pull requests that have maintenable, readable, lint test passed, test cases(old and new) and test cases passed(old and new). Please add new test cases and remove older ones only if applicable.

* [Open a new pull request here](https://github.com/parasharabh/ngx-http-client-service/compare)

# Author

This ngxHttpClient service is brought to you by Abhishek Parashar [Email](parashar.abh@gmail.com). I built it for one of my apps, because the other httpCLient packages I found were not as much maintainable and were not process oriented. It will help you in making your code writing more process oriented, maintenable, readable and will help you in defining a process while defining your application http request. It will also help in testing your code and writing your test cases in more process oriented way.

# Contributors

Thanks to all contributors:

* [parasharabh](https://github.com/parasharabh)

# License

[MIT](https://github.com/parasharabh/ngx-http-client-service/blob/main/LICENSE)
