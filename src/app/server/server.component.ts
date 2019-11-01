import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color:white;
        }
    `]
})
export class ServerComponent {
    severId : number = 10;
    severStatus : string = 'offline'; //this is typescript, but this is not required 

    constructor() {
        this.severStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus () {
        return this.severStatus;
    }

    getColor() {
        return this.severStatus === 'online' ? 'green' : 'red';
    }
}