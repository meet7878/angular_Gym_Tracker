import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from '../service/adminservice.service';


@Component({
  selector: 'app-useroffer',
  templateUrl: './useroffer.component.html',
  styleUrls: ['./useroffer.component.css']
})
export class UserofferComponent implements OnInit {

  constructor( private aRoute:ActivatedRoute,private toastr:ToastrService,private adminservice:AdminserviceService ) { }

userId = -1
planName:String=""
planType:String=""
amount:String=""
duration:String=""


  ngOnInit(): void {
    this.userId = this.aRoute.snapshot.params["userId"];
    console.log(this.userId)
    this.getpersonalofferApi(this.userId)
  }
 
  getpersonalofferApi(id:any){
    
    this.adminservice.getpersonalofferApi(id).subscribe(resp=>{
      console.log("getpersonalofferApi..........");
      console.log(resp.planName);
   console.log(resp.amount);
   
      
      this.planName = resp.offers.planName
      this.planType = resp.offers.planType
      this.amount = resp.offers.amount
      this.duration = resp.offers.duration 
    },err=>{
      this.toastr.error("Invlid getpersonalofferApi Response")
    })
  }
}
