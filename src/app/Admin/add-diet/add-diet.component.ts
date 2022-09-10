import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DietService } from 'src/app/Admin/service/diet.service';

@Component({
  selector: 'app-add-diet',
  templateUrl: './add-diet.component.html',
  styleUrls: ['./add-diet.component.css']
})
export class AddDietComponent implements OnInit {
  dietFood=""
  time=""
  constructor(private dietService: DietService, private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
  }
  addDiet(){
    let diet ={"dietFood": this.dietFood, "time": this.time }
    this.dietService.addDiet(diet).subscribe(resp=>{
      console.log(resp);
      this.toastr.success("Diet added ☑");
      this.route.navigateByUrl("/admin/listdiet");
    })
  }
}