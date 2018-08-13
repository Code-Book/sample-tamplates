import 'rxjs/add/operator/do';

import { Observable } from 'rxjs/Observable';

import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Add following to list of Providers in your Module
 * {
 *    provide: HTTP_INTERCEPTORS,
 *    useClass: HttpResponseInterceptor,
 *    multi: true,
 *  }
 */
@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                }
            }
        });
    }
}