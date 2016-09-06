/**
 * Created by Pranay Sashank on 9/4/2016.
 */

import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private authService:AuthService, private router:Router) {
    }

    canActivate() {
        if (this.authService.isLoggedIn()) return true;
        this.router.navigate(['login']);
    }
}