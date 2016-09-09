/**
 * Created by Pranay Sashank on 9/4/2016.
 */
import '../rxjs-extensions'
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

import { Observable } from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    private loggedIn = false;
    private error;

    constructor(private http:Http, private router: Router) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(id, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                'http://127.0.0.1:4567/login.php',
                JSON.stringify({id, password}),
                {headers}
            )
            .map(res => res.json())
            .map((res) => {
                this.error = res.error;
                if (res.success) {
                    localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                }
                return res.success;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this.router.navigate(['login']);
    }

    isLoggedIn() {
        return this.loggedIn;
    }
    getError() {
        return this.error;
    }
}