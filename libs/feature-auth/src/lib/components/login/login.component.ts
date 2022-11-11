import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegex, RoutePaths } from '@bank/shared';
import { AuthService } from '@bank/shared';

@Component({
  selector: 'bank-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  loginForm: FormGroup;
  emailPattern = emailRegex;
  showPassword = false;
  showErrorMessage = false;
  constructor(private formBuilder: FormBuilder, public router: Router, private authService: AuthService ) {
    if(localStorage.getItem("user")){
      this.router.navigate([RoutePaths.PROFILE])
    }
    this.loginForm = this.formBuilder.group({
        email: ["", [Validators.required]],
        password: ["", Validators.required],
    });
  }

  /**
   * Will authenticate user credentials
   * @returns nothing
   */
  signIn(loginForm: FormGroup) {
    if(loginForm.valid){
      this.authService.userloggedIn.next(true);
      localStorage.setItem("user", loginForm.value.email)
      this.router.navigate([RoutePaths.PROFILE])
    }
  }

  /**
   * Will toggle showPassword to show/hide password
   * @returns nothing
   */
  showHidePassword(show: boolean) {
      this.showPassword = show;
  }
}
