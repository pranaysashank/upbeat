import { Component } from '@angular/core';

@Component({
    selector: 'upbeat',
    template: `
        <menu></menu>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    title:string = "Upbeat";
}