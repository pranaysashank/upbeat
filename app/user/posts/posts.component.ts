/**
 * Created by Pranay Sashank on 9/6/2016.
 */

import {Component, OnInit} from "@angular/core";
import {IPost} from "./post";
import {PostsService} from "./posts.service";

@Component({
    selector: 'posts',
    templateUrl: 'app/user/posts/posts.component.html'
})
export class PostsComponent implements OnInit {
    private posts: IPost[];

    constructor(private postsService: PostsService) {}

    ngOnInit(): void {
        this.postsService.getPosts()
            .subscribe((result) => {
                this.posts = result;
                console.log(this.posts);
            })
    }
}