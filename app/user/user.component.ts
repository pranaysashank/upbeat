import {Component, OnInit, NgZone} from "@angular/core";
import {UserService} from "./user.service";
import {AuthService} from "../login/auth.service";

@Component({
    selector: 'user',
    template: `
    <div class="ui main container"><posts></posts></div>`,
    // templateUrl: 'app/user/user.component.html',
    styleUrls: ['app/user/user.component.css']
})
export class UserComponent implements OnInit {
    title: string = 'user';
    private user;

    constructor(private userService: UserService, private authService: AuthService) {
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

    gotoCourse(): void {
        console.log('Clicked');
    }
}