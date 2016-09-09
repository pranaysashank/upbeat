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
/**
 * Created by Pranay Sashank on 9/4/2016.
 */
require('../rxjs-extensions');
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    AuthService.prototype.login = function (id, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post('http://127.0.0.1:4567/login.php', JSON.stringify({ id: id, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            _this.error = res.error;
            if (res.success) {
                localStorage.setItem('auth_token', res.auth_token);
                _this.loggedIn = true;
            }
            return res.success;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this.router.navigate(['login']);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AuthService.prototype.getError = function () {
        return this.error;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map