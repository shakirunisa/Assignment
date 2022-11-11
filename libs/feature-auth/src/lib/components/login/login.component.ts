import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailRegex } from '@bank/shared';

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
  constructor(private formBuilder: FormBuilder ) {
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
