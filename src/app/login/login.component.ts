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
  //  let user={"email" : this.email,
  // "password" : this.password}

  
    //json
    //console.log(resp.data)
    // let authToken = resp.data.user.authToken
   // this.toster.success("Login done")
    
  // let authToken = resp.data.authToken
    // localStorage.setItem("userId",resp.data.userId)
    // localStorage.setItem("email",resp.data.email)
    // localStorage.setItem("firstName",resp.data.firstName)
    //localStorage.setItem("authToken", authToken)
    
   // this.authTokenService.authToken =  authToken

    // if(resp.data.role.roleName == 'user'){
    //        this.router.navigateByUrl("/home")
    // }else if(resp.data.role.roleNme == 'admin'){
    //    this.router.navigateByUrl("/dashboard")  
    //  }

  // },err =>{ 
  //   console.log("jigar..................."+err)
  //   this.toster.error("please try again","401")

  // })

if(this.userForm.valid){


  this.sessionservicer.loginApi(this.userForm.value).subscribe(res =>{
    if (res.data.role.roleName=='user') {
     
      this.tsService.success("login ", "", { timeOut: 3000 });
      this.router.navigateByUrl("/home")
    }else if(res.data.role.roleName == 'admin'){
      this.router.navigateByUrl("/dashboard")
    }
    },err=>{
      console.log(err);
      
    })
  }
    else{
      this.tsService.error("please fill form correctly ", "", { timeOut: 3000 });
    }

  }
  
  //@Transactional
}

  


