import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private route: Router){

  }

  gotoNextApp(){
    window.open("http://localhost:4202","_blank")
   // window.location.href = 'http://localhost:4202';
  }
}
