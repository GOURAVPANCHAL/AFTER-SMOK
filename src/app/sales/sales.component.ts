import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { logWarnings } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  emailform = new FormGroup({
    email: new FormControl(''),
    checkbox: new FormControl(''),
    country: new FormControl(''),
    fname: new FormControl(''),
    Lname: new FormControl(''),
    address: new FormControl(''),
    text: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl(''),
    saveinfo: new FormControl(''),
    phoneNumber: new FormControl(''),
    checkboxs: new FormControl('')
  })

  emailUser() {
    console.log(this.emailform.value);
  }

  formGroup: FormGroup
  constructor(public fb: FormBuilder) { }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['']
    })
  }
}