import { Http, Headers, Response, RequestOptions } from '@angular/http';


export function checkResponse(response: Response): any | any[] {

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
}