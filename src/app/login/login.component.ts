import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { formsModel } from '@angular/formsModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};
  constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    this.dialogRef.close();
  }
}
