import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from '../service/adminservice.service';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {
  userForm: FormGroup
  emailpattern = "^[a-z0-9]+@gmail.com"
  constructor(private tsService: ToastrService,
    private router:Router,
    private adminservice : AdminserviceService,private aRoute:ActivatedRoute) {
       this.userForm = new  FormGroup({
       firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
       lastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
       number: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
       email: new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
       date: new FormControl('',[Validators.required]),
       pincode: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
       address: new FormControl('',[Validators.required]),
     
      
       
       })

     }
     userId= 0
     firstName=""
     lastName=""
     number=""
     email=""
     date=""
     pincode=""
     address=""
    

     ngOnInit(): void {
      console.log("oninit()....")
      this.userId = this.aRoute.snapshot.params["userId"]
       this.getUserId()
    } 

    getUserId(){
      console.log("get method");
      
      this.adminservice.getUserIdApi(this.userId).subscribe(resp=>{
        console.log(resp);
        this.firstName =resp.firstName;
        this.lastName = resp.lastName;
        this.number = resp.number;
        this.email = resp.email;
        this.date = resp.date;
        this.pincode = resp.pincode;
        this.address = resp.address;
     


      })
    }
 
  
    updateuser(){
      console.log("UPDATE");
      
   
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
    // if(this.userForm.valid){
      this.adminservice.updateUser(this.userForm.value).subscribe(res =>{
        if (res) {
          this.tsService.success("EditUser SucessFully ", "", { timeOut: 3000 });
          this.router.navigateByUrl("/login")
        }
        },err=>{
          console.log(err);
          
        })
    // }else{
    //   this.tsService.error("please fill form correctly ", "", { timeOut: 3000 });
    // }

    }
  }
