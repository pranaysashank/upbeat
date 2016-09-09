/**
 * Created by Pranay Sashank on 9/7/2016.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {IPost} from "./post";

import '../../rxjs-extensions';

@Injectable()
export class PostsService {

    constructor(private http: Http) {}

    getPosts(): Observable<IPost[]> {
        let authToken = localStorage.getItem('auth_token');
        return this.http
            .get(`http://127.0.0.1:4567/posts.php?auth_token=${authToken}`)
            .map((res) => <IPost>res.json());
    }
}
