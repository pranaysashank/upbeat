/**
 * Created by Pranay Sashank on 9/9/2016.
 */
export interface IComment {
    author: string;
    body: string;
    comments: IComment[];
}
