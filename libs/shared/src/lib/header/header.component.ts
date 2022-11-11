import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { APP_URL, RoutePaths } from '../enums';
import { LOCATION } from '../enums/Location';

@Component({
  selector: 'bank-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(public router: Router){}
  
  @Input() selectedLocation: string= LOCATION.INDIA
  items: MenuItem[] = [
    {
        label:'Change Application',
        items:[
          {
            label: LOCATION.INDIA,
            command: () => this.setLocation(LOCATION.INDIA)
          },
          {
            label: LOCATION.AMERICA,
            command: () => this.setLocation(LOCATION.AMERICA)
          }
      ]
    },
    {
        label:'User',
        icon:'pi pi-fw pi-user',
        items:[
            {
                label:'Login',
                command: () => this.router.navigate([RoutePaths.AUTH_LOGIN])
            },
            {
                label:'Register',
                command: () => this.router.navigate([RoutePaths.AUTH_REGISTER])
            }
        ]
    }
  ];

  setLocation(location: string){
    if(location === LOCATION.INDIA){
      window.location.href = APP_URL.INDIA
    }
    else{
      window.location.href = APP_URL.AMERICA
    }
  }
}
