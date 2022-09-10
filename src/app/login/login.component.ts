import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email = ""
  // password = ""
  userForm: FormGroup
  constructor(private sessionservicer :SessionService,private tsService:ToastrService,private router :Router ) {
    this.userForm = new  FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]) 
   })
  }

  ngOnInit(): void { }

  login() {
  

if(this.userForm.valid){


  this.sessionservicer.loginApi(this.userForm.value).subscribe(res =>{
    console.log(res.data)
    localStorage.setItem('userId',res.data.userId)
   
    if (res.data.role.roleName=='user') { 
      this.tsService.success("login ", "", { timeOut: 3000 });
      this.router.navigateByUrl("/user/home")
    }else if(res.data.role.roleName == 'admin'){
      this.router.navigateByUrl("/admin/dashboard")
    }     
    },err=>{
      console.log(err);
      
    })
  }
    else{
      this.tsService.error("please fill form correctly ", "", { timeOut: 3000 });
    }

  }
  
  
}

  


