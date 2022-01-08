import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  formErrors: any;
  pwdHide: boolean = true;

  /**required service Dependency Injection
   * singinForm created
   */
  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.signinForm = this._formBuilder.group({
      "email": this._formBuilder.control(null, [Validators.required]),
      "password": this._formBuilder.control(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  /**sigin by email
   */
  submitForm(): void {
    console.log(this.signinForm.value);
  }

}
