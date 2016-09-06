/**
 * Created by Pranay Sashank on 9/5/2016.
 */
import {Component} from "@angular/core";
import {AuthService} from "../login/auth.service";

@Component({
    selector: 'menu',
    templateUrl: 'app/menu/menu.component.html'
})
export class MenuComponent {

    constructor(private authService: AuthService) {}
    logout() {
        this.authService.logout();
        return;
    }
}
