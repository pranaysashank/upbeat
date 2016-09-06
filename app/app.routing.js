"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./user/user.component");
var login_component_1 = require("./login/login.component");
var logged_in_guard_1 = require("./login/logged-in.guard");
var logged_out_guard_1 = require("./login/logged-out.guard");
var profile_component_1 = require("./user/profile/profile.component");
/**
 * Created by Pranay Sashank on 9/4/2016.
 */
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [logged_out_guard_1.LoggedOutGuard]
    },
    {
        path: '',
        pathMatch: 'full',
        component: user_component_1.UserComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard]
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map