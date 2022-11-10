import { Component, Input } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LOCATION } from '../enums/Location';

@Component({
  selector: 'bank-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

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

            },
            {
                label:'Register',

            }
        ]
    }
  ];

  setLocation(location: string){
    if(location === LOCATION.INDIA){
      window.location.href = "http://localhost:4201"
    }
    else{
      window.location.href = "http://localhost:4202"
    }
  }
}
