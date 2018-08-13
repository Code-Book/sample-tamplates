import { Observable } from 'rxjs/Observable';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Add following to list of Providers in your Module
 * {
 *    provide: HTTP_INTERCEPTORS,
 *    useClass: HttpRequestInterceptor,
 *    multi: true,
 *  }
 */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: '<Stop being lazy, add your own token>'
            }
        });

        return next.handle(request);
    }
}