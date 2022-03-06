import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {

  reactiveform! : FormGroup;

  //   fullName : new FormControl(''),
  //   address : new FormControl(''),
  //   city : new FormControl(''),
  //   email : new FormControl(''),
  //   phone : new FormControl(''),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  // })
  constructor(private fb: FormBuilder) {}

  get f(): { [key: string]: AbstractControl } {
    return this.reactiveform.controls;
  }
  get fullname() {
    return this.reactiveform.get('fullname');
  }
  get address() {
    return this.reactiveform.get('address');
  }
  get city() {
    return this.reactiveform.get('city');
  }
  get email() {
    return this.reactiveform.get('email');
  }
  get phone() {
    return this.reactiveform.get('phone');
  }
  get password() {
    return this.reactiveform.get('password');
  }
  get confirmPassword() {
    return this.reactiveform.get('confirmPassword');
  }

  submit() {
    console.log('submit pressed');
  }

  ngOnInit(): void {

   this.reactiveform = this.fb.group({
     fullname : ['',[Validators.required]],
     address : ['',[Validators.required]],
     city : ['',[Validators.required]],
     email : ['',[Validators.required,Validators.email]],
     phone : [,
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern('[0-9]*'),
      ]
    ],
     password : ['',[Validators.required]],
     confirmPassword : ['',[Validators.required]]

   });

}
}
