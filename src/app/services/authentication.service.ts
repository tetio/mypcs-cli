import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../models'
import { getEnvironment } from '../config';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(getEnvironment('endpoint') + '/user/authenticate', JSON.stringify({ username: username, password: password }), options)
      .map(response => {
        if (response.status === 200) {
          let session = response.json();
          if (session && session.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('session', JSON.stringify(session));
          }
          return true;
        } else if (response.status === 202) {
          return false
        }
        return false
      });
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
