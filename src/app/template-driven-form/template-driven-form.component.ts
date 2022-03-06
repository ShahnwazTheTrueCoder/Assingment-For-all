import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user:any={
    fullName:'',
    email:'',
    phoneNo:null,
    password:'',
    cpassword:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit(form:NgForm): void{
    console.log(form)
  }

}
