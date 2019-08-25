import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private request: HttpRequest<any>;

    constructor(
        private authService: AuthService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.setAuthHeaders(request);

        return next.handle(request);
        // return next.handle(request).pipe(
        //     catchError((err: HttpErrorResponse) => {
        //         if (err.status === 401 && !request.url.includes('refresh')) {
        //             return this.authService.refresh().pipe(
        //                 switchMap((data) => {
        //                     this.authService.setCookie('es_cli_jwt', data.token);
        //                     request = request.clone({setHeaders: {Authorization: `Bearer ${data.token}`}});

        //                     return next.handle(request);
        //                 })
        //             );
        //         }

        //         if (request.url.includes('refresh')) {
        //             console.log('error refreshing');
        //             throwError(err.message);
        //         }

        //         return throwError(err.error.message || err.statusText);
        //     })
        // );
    }

    private setAuthHeaders(request: HttpRequest<any>) {
        // const whitelistedRoutes = ['login', 'refresh'];
        // let applyHeaders = true;
        // for (const route in whitelistedRoutes) {
        //     if (request.url.includes(route)) {
        //         applyHeaders = false;
        //     }
        // }

        // if (!applyHeaders) {
        //     console.log('skipping apply headers');
        //     return request;
        // }

        const authCookie = this.authService.getCookie('es_cli_jwt');
        const refreshCookie = this.authService.getCookie('es_cli_ref');

        console.log(authCookie, refreshCookie);

        if (authCookie && refreshCookie) {
            request.headers.append('Authorization', 'Bearer ' + authCookie);
            request.headers.append('X-Refresh-Token', refreshCookie);

            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${authCookie}`,
                    'X-Refresh-Token': refreshCookie
                }
            });
        } else {
            console.error('missing authcookie or refresh cookie');
        }

        return request;
    }


}
