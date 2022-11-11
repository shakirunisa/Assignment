import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userloggedIn = new Subject<boolean>();
  userloggedIn$ = this.userloggedIn.asObservable();
}
