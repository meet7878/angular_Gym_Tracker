import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { UserserviceService } from '../../userservice.service';

@Component({
  selector: 'app-personaldetail',
  templateUrl: './personaldetail.component.html',
  styleUrls: ['./personaldetail.component.css']
})
export class PersonaldetailComponent implements OnInit {
  
  userForm:FormGroup
  constructor(private tsService:ToastrService,private router:Router,
    private userservice:UserserviceService ) {
    this.userForm = new FormGroup({
      age: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(2)]),

      weight:new FormControl('',[Validators.required]),
      fat:new FormControl('',[Validators.required]),
      chest:new FormControl('',[Validators.required]),
      arms:new FormControl('',[Validators.required]),
      goal:new FormControl('',[Validators.required]),
      height:new FormControl('',[Validators.required]),
      deit:new FormControl('',[Validators.required]),
      emergencyNum: new FormControl ('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
       users:new FormControl({
         userId:localStorage.getItem("userId")
       })
    })  
    
   }
   
   
   
   ngOnInit(): void {
  }
  
  PersonalDetail(){
   
    console.log(this.userForm.value)
    if(this.userForm.valid){
     
     this.userservice.pesonalDetailApi(this.userForm.value).subscribe(res=>{
      if(res){
      this.tsService.success("personaldetail Added succefully" ,"", { timeOut: 3000 });
      this.router.navigateByUrl("/user/viewalloffer")
    }
  },err=>{
    console.log(err);
  })
    }else{
      this.tsService.error("please fill form correctly","",{timeOut:3000});
    }
  }

}


