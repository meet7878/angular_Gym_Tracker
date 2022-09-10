import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from '../service/adminservice.service';





@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  
  offerForm:FormGroup
  constructor(private tsService:ToastrService,private router:Router,
    private adminservice:AdminserviceService ) {
    this.offerForm = new FormGroup({
      
      planName:new FormControl('',[Validators.required,Validators.minLength(2)]),
      planType:new FormControl('',[Validators.required]),
      amount:new FormControl('',[Validators.required]),
      duration:new FormControl('',[Validators.required]),
     
       })
    } 
    
   ngOnInit(): void {
  }
  

  offerDetail(){
   
    console.log(this.offerForm.value)
    if(this.offerForm.valid){
     
     this.adminservice.offerUser(this.offerForm.value).subscribe(res=>{
      if(res){
      this.tsService.success("offer Added succefully" ,"", { timeOut: 3000 });
      this.router.navigateByUrl("/admin/dashboard")
    }
  },err=>{
    console.log(err);
  })
    }else{
      this.tsService.error("please fill form correctly","",{timeOut:3000});
    }
  }

}

