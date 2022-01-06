import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  private isSubmited: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initRegisterForm()
  }

  initRegisterForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      courses: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', Validators.required, Validators.email, Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]],
      confirmPassword: ['', Validators.required],
      joinCommunity: [''],
      agreeTermCond: ['', Validators.required],
      newsLetter: [''],
    })
  }

}
