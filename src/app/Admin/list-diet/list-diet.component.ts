import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DietService } from 'src/app/Admin/service/diet.service';

@Component({
  selector: 'app-list-diet',
  templateUrl: './list-diet.component.html',
  styleUrls: ['./list-diet.component.css']
})
export class ListDietComponent implements OnInit {

  diets:Array<any>=[]
  constructor(private dietService:DietService, private toastr:ToastrService){ }

  ngOnInit(): void {
    this.getAllDiets()
  }
  getAllDiets(){
    this.dietService.getAllDiets().subscribe(resp=>{
      console.log("Get All Diet Details");
      console.log(resp);
      this.diets=resp
    })
  }
  deleteDiet(id:any){
    console.log("Id....."+id);
    
    this.dietService.deleteDiet(id).subscribe(resp=>{
      this.toastr.success("Diet Deleted...❌")
      this.diets =this.diets.filter(d=>d.dietId !=id)
    },err=>{
      console.log(err);
      this.toastr.error(err);      
    })
    // updateDiet(){

    // }
  }
}
