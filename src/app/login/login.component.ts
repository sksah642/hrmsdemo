import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

 email!: string;
 password!: string;
 constructor() {}


  ngOnInit(){

  }
  LoginUser(): void
  {
    if(this.email! == "Admin" && this.password! =="admin123")
  {
    console.log("Welcome");
  }
  }


 }


