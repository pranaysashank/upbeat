import {Routes, RouterModule} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {LoggedInGuard} from "./login/logged-in.guard";
import {LoggedOutGuard} from "./login/logged-out.guard";
import {ProfileComponent} from "./user/profile/profile.component";
import {CoursesComponent} from "./user/courses/courses.component";
/**
 * Created by Pranay Sashank on 9/4/2016.
 */


const appRoutes : Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [ LoggedOutGuard ]
    },
    {
        path: '',
        pathMatch:'full',
        component: UserComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: 'courses',
        component: CoursesComponent,
        canActivate: [LoggedInGuard]
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);