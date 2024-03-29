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
 * Created by Pranay Sashank on 9/2/2016.
 */
require('../rxjs-extensions');
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var auth_service_1 = require("../login/auth.service");
var UserService = (function () {
    // private observable: Observable;
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    UserService.prototype.getUser = function () {
        var authToken = localStorage.getItem('auth_token');
        return this.http
            .get("http://127.0.0.1:4567/user.php?auth_token=" + authToken)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map