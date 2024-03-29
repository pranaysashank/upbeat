/**
 * Created by Pranay Sashank on 9/6/2016.
 */
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
var posts_service_1 = require("./posts.service");
var PostsComponent = (function () {
    function PostsComponent(postsService) {
        this.postsService = postsService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getPosts()
            .subscribe(function (result) {
            _this.posts = result;
            console.log(_this.posts);
        });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: 'app/user/posts/posts.component.html'
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map