import { Component, OnInit } from '@angular/core';
import{AuthService} from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string;
  pwd:string;
  name:string;
  description:string;
  errorMessage:string;
  

  constructor( private auth:AuthService) { }

  ngOnInit() {
  }

  register()
  {
    
    this.auth.signup(this.email,this.pwd,this.name);
    console.log(this.email);
    console.log("Your account has been created successfully ");
    
  }

}
