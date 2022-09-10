import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WorkoutService } from '../service/workout.service';

@Component({
  selector: 'app-workout-add',
  templateUrl: './workout-add.component.html',
  styleUrls: ['./workout-add.component.css']
})
export class WorkoutAddComponent implements OnInit {

  title=""
  warmUp=""
  exercise=""
  streching=""
  day=""
  constructor(private workoutService:WorkoutService, private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
  }
  addWorkout(){
    let workOut = {"title":this.title, "warmUp":this.warmUp, "exercise":this.exercise, "streching":this.streching, "day":this.day}
    this.workoutService.addWorkout(workOut).subscribe(resp=>{
      console.log(resp);
      this.toastr.success("WorkOut Added ☑");
      this.route.navigateByUrl("/admin/listworkout")
    })
  }
}
