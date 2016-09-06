/**
 * Created by Pranay Sashank on 9/4/2016.
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";


@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css']
})
export class LoginComponent {
    constructor(private authService:AuthService, private router:Router) {
    }

    onSubmit(id, password) {
        console.log(id, password);
        this.authService.login(id, password).subscribe((result) => {
            if (result) {
                // console.log('Logged In');
                this.router.navigate(['']);
                return;
            }
            console.log(this.authService.getError());
        });
    }
}