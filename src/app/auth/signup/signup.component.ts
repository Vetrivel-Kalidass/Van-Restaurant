import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  formErrors: any;
  pwdHide: boolean = true;
  confirmHide: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.signupForm = this._formBuilder.group({
      "email": this._formBuilder.control(null, [Validators.required]),
      "password": this._formBuilder.control(null, [Validators.required]),
      "confirm": this._formBuilder.control(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    let newUser = {
      email: this.signupForm.get("email")?.value,
      password: this.signupForm.get("password")?.value
    };
    console.log(newUser);
  }

}
