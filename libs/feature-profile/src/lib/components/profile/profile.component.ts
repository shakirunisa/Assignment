import { Component, OnInit } from '@angular/core';
import { getUser } from '@bank/shared';

@Component({
  selector: 'bank-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = ""

  ngOnInit(): void {
    this.user = getUser() || ""
  }
}
