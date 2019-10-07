import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(
      private http: HttpClient
  ) {}

  public login(email: string, password: string): Observable<any> {
    return this.http.post(env.api.url('auth/login'), {email, password}).pipe(
      pluck('data')
    );
  }

  public refresh(): Observable<any>  {
    return this.http.post(env.api.url('auth/refresh'), {Code: this.getRefreshToken()});
  }

  public register(email: string, password: string, username: string): Observable<any> {
    return this.http.post(env.api.url('users'), {email, password, username});
  }

  public getAccessToken() {
    return localStorage.getItem('es_cli_jwt') || false;
  }

  public getRefreshToken() {
    return localStorage.getItem('es_cli_ref') || false;
  }

  public setAccessToken(accessToken: string) {
    localStorage.setItem('es_cli_jwt', accessToken);
  }

  public setRefreshToken(refreshToken: string) {
    localStorage.setItem('es_cli_ref', refreshToken);
  }

  public getCookie(name: string) {
    name = name + '=';
    const ca = document.cookie.split(';');

    // Iterate over all cookies stored in browser
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      // If the cookie being iterated over has the same name as the argument, we'll return it's value
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    // Got nothing, return false
    return null;
  }

  public setCookie(name: string, value: string) {
    document.cookie = name + '=' + value + ';path=/';
  }
}
