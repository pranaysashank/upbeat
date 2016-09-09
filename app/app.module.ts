import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserComponent} from "./user/user.component";
import {UserService} from "./user/user.service";
import {KeysPipe} from "./user/keys.pipe";
import {LoginComponent} from "./login/login.component";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import {LoggedInGuard} from "./login/logged-in.guard";
import {FormsModule} from "@angular/forms";
import {AuthService} from "./login/auth.service";
import {LoggedOutGuard} from "./login/logged-out.guard";
import {MenuComponent} from "./menu/menu.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {CoursesComponent} from "./user/courses/courses.component";
import {PostsComponent} from "./user/posts/posts.component";
import {PostsService} from "./user/posts/posts.service";

@NgModule({
    imports: [BrowserModule, FormsModule, routing, HttpModule],
    declarations: [AppComponent, UserComponent, LoginComponent, MenuComponent, ProfileComponent, CoursesComponent, PostsComponent, KeysPipe],
    providers: [UserService, PostsService, LoggedInGuard, AuthService, LoggedOutGuard],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}