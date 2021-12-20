import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TimeoutError } from 'rxjs';

export class ErrorConstants {
    public static CONNECTION_TIME_OUT = 'Connection timed out. Please try again later.';
    public static SOMETHING_WENT_WRONG = 'Something went wrong, please try again later.';
    public static TIMEOUT = 'Connection timed out. Please try again later.';
    public static UNAUTHORIZED = 'You are not authorized to access this.';
    public static INTERNAL_SERVER_ERROR = 'Server error, please try again later.';
    public static BAD_GATEWAY = 'Bad gateway, please try again later.';
    public static SERVICE_UNAVAILABLE = 'Service is not available right now, please try again later.';
    public static GATEWAY_TIME_OUT = 'Gateway timeout, please try again later.';
    public static NO_DATA_FOR_FILTER_COMBINATION = 'No data available for the applied filter combination.';

    public static SOMETHING_WENT_WRONG_HTTP_RESPONSE: HttpErrorResponse | TimeoutError | Error = new HttpErrorResponse({
        error: 'HTTPError',
        headers: new HttpHeaders(),
        status: 500,
        statusText: ErrorConstants.SOMETHING_WENT_WRONG
    });

    public static TIMEOUT_HTTP_RESPONSE: HttpErrorResponse | TimeoutError | Error = new TimeoutError();
}
