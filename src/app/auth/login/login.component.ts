import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private isFormSubmited: boolean = false
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initLoginForm()
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")]],
      password: ['', [Validators.required]]
    })
  }

  // loginWithGoogle() {
  //   this.authService.loginWithGoogle().subscribe((res: any) => {

  //   })
  // }

  // loginWithFacebook() {
  //   this.authService.loginWithGoogle().subscribe((res: any) => {

  //   })
  // }

}
