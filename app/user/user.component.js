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
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var auth_service_1 = require("../login/auth.service");
var UserComponent = (function () {
    function UserComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.title = 'user';
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getUser().subscribe(function (result) {
            if (result['failure']) {
                _this.authService.logout();
                return;
            }
            _this.user = result;
        });
    };
    UserComponent.prototype.gotoCourse = function () {
        console.log('Clicked');
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: "\n    <div class=\"ui main container\"><posts></posts></div>",
            // templateUrl: 'app/user/user.component.html',
            styleUrls: ['app/user/user.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, auth_service_1.AuthService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map