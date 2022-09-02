import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, MaxLengthValidator, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { max } from 'rxjs';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //  firstName:String = ""
  //  email:String = ""
  //  password: String = ""

  userForm: FormGroup
  emailpattern = "^[a-z0-9]+@gmail.com"
  constructor(private tsService: ToastrService,
    private router:Router,
    private sessionservice : SessionService) {
       this.userForm = new  FormGroup({
       firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
       lastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
       number: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
       email: new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
       date: new FormControl('',[Validators.required]),
       pincode: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
       address: new FormControl('',[Validators.required]),
       gender: new FormControl(''),
       password: new FormControl('', [Validators.required, Validators.minLength(8),this.strongPassword])
       
       })

     }
     ngOnInit(): void {
    } 

 
  
  signup(){
   
    console.log(this.userForm.value)
    // console.log(this.firstName)
    // console.log(this.email);
    // console.log(this.password);
    

    // let user = {
    //   "firstName":this.firstName,
    //   "email": this.email,
    //   "password": this.password,
    //   "gender": "male",

    // }
    if(this.userForm.valid){
      this.sessionservice.signupApi(this.userForm.value).subscribe(res =>{
        if (res) {
         
          this.tsService.success("Signup ", "", { timeOut: 3000 });
          this.router.navigateByUrl("/login")
        }
        },err=>{
          console.log(err);
          
        })
    }else{
      this.tsService.error("please fill form correctly ", "", { timeOut: 3000 });
    }

    }

  strongPassword(password: AbstractControl): ValidationErrors | null {
    let isUpper = false
    let isLower = false
    let isSpecial = false
    let isDigit = false
    let passwordValue = password.value as string
  
    if (passwordValue.length < 8)
      return null
  
    for (let i = 0; i < passwordValue.length; i++) {
      if (passwordValue.charAt(i) >= 'A' && passwordValue.charAt(i) <= 'Z') {
        isUpper = true
      } else if (passwordValue.charAt(i) >= 'a' && passwordValue.charAt(i) <= 'z') {
        isLower = true
      }
      else if (passwordValue.charAt(i) == '$' || passwordValue.charAt(i) == '#' || passwordValue.charAt(i) == '@') {
        isSpecial = true
      }
      else if (passwordValue.charAt(i) >= '0' && passwordValue.charAt(i) <= '9') {
        isDigit = true
      }
    }
  
    if (isLower && isUpper && isSpecial && isDigit)
      return null
    else
      return { "strongPassword": true }
    // return null;//no errors 
  }

}

