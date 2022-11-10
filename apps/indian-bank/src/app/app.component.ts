import { Component } from '@angular/core';
import { LOCATION } from '@bank/shared';

@Component({
  selector: 'bank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'indian-bank';
  location = LOCATION.INDIA
}
