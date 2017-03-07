import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'

import {User} from '../models'
import { getEnvironment } from '../config';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    // return this.http.post(getEnvironment('endpoint') + '/user/authenticate', JSON.stringify({ username: username, password: password }))
    //   .map((response: Response) => {
    //     // login successful if there's a jwt token in the response
    //     let user = response.json();
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //     }
    //   });
    return <User>{username: 'polpol'};
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
