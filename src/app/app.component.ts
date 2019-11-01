import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //this is the name of the component, 
  //that we use in the index html -> we can also use the class selecor (.app-root) and use <div class="app-root">
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
