import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {api} from '../config';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    isLoggedIn = false;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(api.SERVER_URL + '/token/generate-token', { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                this.isLoggedIn = true;
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        this.isLoggedIn = false;
        localStorage.removeItem('currentUser');
    }
}
