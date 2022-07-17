import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontibanque';
  routes = [{name:"demande",path:'demande'},{name:"Creation demande",path:'creation-demande'}];
}
