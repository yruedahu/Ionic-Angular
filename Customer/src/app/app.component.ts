import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title : 'Home', url: '/home', icon: 'home'},
    {title : 'Customer', url: '/customer', icon: 'people'},
    {title : 'Sueldo', url: '/sueldo', icon: 'cash'},
    {title : 'Market', url: '/market', icon: 'bag'},
    {title : 'Cart', url: '/cart', icon: 'cart'},
  ];
  public labels = [];
  constructor() {}
}