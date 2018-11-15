import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from '@angular/forms';
import{AuthService} from '../service/auth.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:string;
  form;
  email:string;
  password:string;

  constructor(private fb:FormBuilder,private myRoute:Router,private auth:AuthService)
   {
    this.form=fb.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      password:['',Validators.required]
    });
   }

  ngOnInit() {
  }

  login(){
      this.auth.doLogin(this.form.value)
      .then(res=>{
        this.myRoute.navigate(['ProductList']);
       }, err=>{
    console.log(err);
    this.errorMessage=err.message;
  })
}
}
