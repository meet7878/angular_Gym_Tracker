import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-viewoffer',
  templateUrl: './viewoffer.component.html',
  styleUrls: ['./viewoffer.component.css']
})
export class ViewofferComponent implements OnInit {

  offers:Array<any>= []
  userId:number=0;

  constructor(private userservice:UserserviceService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAlloffer()
  }


  getAlloffer(){
  this.userservice.getofferApi().subscribe(resp=>{
    console.log("display all user....getAlloffer()")
    console.log(resp);
    this.offers = resp 

  },err=>{
    console.log(err);
  this.toastr.error(err);
  })

  
 }
 addoffer(id:any){
  console.log("addoffer()");
  
  const userId = localStorage.getItem("userId")
  this.userservice.addofferApi(id,userId).subscribe(resp=>{
    console.log("userId");
    
  },err=>{
    console.log("add offer error........")
  })
}
}