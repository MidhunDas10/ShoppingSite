import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import data from 'src/app/files/db.json';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public datalist :{email:string , password:string }[]=data ;
  loginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  constructor(private router:Router) { }
  loginUser()
  {
    
    
    if(this.loginForm.value.email==data.email)
    {
      console.log("success")
      this.router.navigate(['products'])
      
    }
    else
    {
      console.log("fail")
      alert("Login Credentials invalid");
      this.router.navigate(['login'])
    }

  }

  

  ngOnInit(): void {
    
    
  }

}
