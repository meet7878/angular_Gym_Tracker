import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/Admin/service/adminservice.service';

@Component({
  selector: 'app-view-personal-detail',
  templateUrl: './view-personal-detail.component.html',
  styleUrls: ['./view-personal-detail.component.css']
})
export class ViewPersonalDetailComponent implements OnInit {

  constructor(private aRoute:ActivatedRoute,private addminservice:AdminserviceService,private toaster:ToastrService) { }
  userId = -1
  age:String=""
  height:String=""
  weight:String=""
  fat:String=""
  chest:String=""
  arms:String=""
  goal:String=""
  deit:String=""
  emergencyNum:String=""
  ngOnInit(): void {
    this.userId=this.aRoute.snapshot.params["userId"];
    console.log(this.userId)
    this.getpersonalApi(this.userId)
    
  }

  getpersonalApi(id:any){
   this.addminservice.getpersonalApi(id).subscribe(resp=>{
    console.log("getpersonalApi called")
    this.age = resp.age
    this.height = resp.height
    this.weight = resp.weight
    this.fat = resp.fat
    this.chest = resp.chest
    this.arms =resp.arms
    this.goal = resp.goal
    this.deit = resp.deit
    this.emergencyNum =resp.emergencyNum

  

   },err=>{
    this.toaster.error("Invlid getpersonalApi Response")
   })
  }

}
