import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  loggedIn:boolean = false;

  login(){
    this.loggedIn = true;
  }
  logout(){
    this.loggedIn = false;
  }
}
