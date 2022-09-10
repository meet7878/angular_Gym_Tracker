import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/Admin/service/adminservice.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users: Array<any> = []

  constructor(private userservice:AdminserviceService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    this.userservice.getAllUser().subscribe(resp=>{
      console.log("display all user....getAllUser()")
      console.log(resp);
      this.users = resp
      
    },err=>{
      console.log(err);
    this.toastr.error(err);
    }
    )
  }

}
