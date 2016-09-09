"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var user_component_1 = require("./user/user.component");
var user_service_1 = require("./user/user.service");
var keys_pipe_1 = require("./user/keys.pipe");
var login_component_1 = require("./login/login.component");
var app_routing_1 = require("./app.routing");
var http_1 = require("@angular/http");
var logged_in_guard_1 = require("./login/logged-in.guard");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./login/auth.service");
var logged_out_guard_1 = require("./login/logged-out.guard");
var menu_component_1 = require("./menu/menu.component");
var profile_component_1 = require("./user/profile/profile.component");
var courses_component_1 = require("./user/courses/courses.component");
var posts_component_1 = require("./user/posts/posts.component");
var posts_service_1 = require("./user/posts/posts.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, user_component_1.UserComponent, login_component_1.LoginComponent, menu_component_1.MenuComponent, profile_component_1.ProfileComponent, courses_component_1.CoursesComponent, posts_component_1.PostsComponent, keys_pipe_1.KeysPipe],
            providers: [user_service_1.UserService, posts_service_1.PostsService, logged_in_guard_1.LoggedInGuard, auth_service_1.AuthService, logged_out_guard_1.LoggedOutGuard],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map