import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html', //templateUrl and template have to be present at all times !  we van have inlined  
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer : boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['TestServer', 'Test 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:  any) { //specify the argument type in typescript 
    console.log(event);
    this.serverName = event.target.value;
  }

}
