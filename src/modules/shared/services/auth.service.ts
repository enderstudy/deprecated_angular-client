import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(
      private http: HttpClient
  ) {}

  public login(email: string, password: string): Observable<any> {
    return this.http.post('//localhost:5000/api/auth/login', {email, password});
  }

  public refresh(): Observable<any>  {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('X-Refresh-Token', this.getCookie('es_cli_ref'));
    headers = headers.set('Authorization', `Bearer ${this.getCookie('es_cli_jwt')}`);

    return this.http.post('//localhost:5000/refresh', {}, {headers});
  }

  public register(email: string, password: string, username: string): Observable<any> {
    return this.http.post('//localhost:5000/api/users', {email, password, username});
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
