import {IComment} from "./comment";
/**
 * Created by Pranay Sashank on 9/9/2016.
 */
export interface IPost {
    author: string;
    body: string;
    comments: IComment[];
    upvotes: number;
    downvotes: number;
}