/**
 * Created by Pranay Sashank on 9/3/2016.
 */

import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
    name: 'keys'
})
export class KeysPipe implements PipeTransform {

    transform(value: any, ...args): any {
        let keys = [];

        for (let key in value) {
            keys.push(key);
        }
        return keys;
    }
}
