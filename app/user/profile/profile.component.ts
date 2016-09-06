/**
 * Created by Pranay Sashank on 9/6/2016.
 */

import {Component, OnInit} from "@angular/core";
import {UserService} from "../user.service";
import {AuthService} from "../../login/auth.service";

@Component({
    selector: 'profile',
    templateUrl: 'app/user/profile/profile.component.html'
})
export class ProfileComponent implements OnInit {
    private user;

    constructor(private authService: AuthService, private userService: UserService) {
    }

    ngOnInit(): void {
        this.user = this.userService.getUser().subscribe((result) => {
            if (result['failure']) {
                this.authService.logout();
                return;
            }
            this.user = result;
        });
    }
}