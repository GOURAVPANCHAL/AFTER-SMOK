import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')

    })
  }

  submit() {
    alert(this.formGroup.value)
  }

}
