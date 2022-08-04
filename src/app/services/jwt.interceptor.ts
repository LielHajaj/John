import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthStore } from '../redux/auth-state';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (AuthStore.getState().token) {
            request = request.clone({
                setHeaders:
                {
                    authorization: "Bearer" + AuthStore.getState().token
                }
            });

        }
        return next.handle(request);
    }
}
