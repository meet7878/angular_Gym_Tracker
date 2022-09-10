import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietService } from 'src/app/Admin/service/diet.service';

@Component({
  selector: 'app-edit-diet',
  templateUrl: './edit-diet.component.html',
  styleUrls: ['./edit-diet.component.css']
})
export class EditDietComponent implements OnInit {

  constructor(private aRoute:ActivatedRoute, private dietService:DietService) { }

  dietId = -1
  dietFood = ""
  time=""
  ngOnInit(): void {
    this.dietId = this.aRoute.snapshot.params["dietId"]
    this.getDietById()
  }
  getDietById(){
    this.dietService.getDietByIdApi(this.dietId).subscribe(resp=>{
      console.log(resp);
      
      this.dietFood = resp.dietFood;
    })
  }
}
