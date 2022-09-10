import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../service/workout.service';

@Component({
  selector: 'app-workout-edit',
  templateUrl: './workout-edit.component.html',
  styleUrls: ['./workout-edit.component.css']
})
export class WorkoutEditComponent implements OnInit {

  constructor(private aRoute:ActivatedRoute,private workoutService:WorkoutService) { }
  workoutId=-1
  title=""
  warmUp=""
  exercise=""
  streching=""
  day=""
  ngOnInit(): void {
    this.workoutId = this.aRoute.snapshot.params["workoutId"]
  }
  getWorkoutById(){
    this.workoutService.getWorkoutByIdApi(this.workoutId).subscribe(resp=>{
      console.log(resp);
      
      this.title = resp.dietFood;
    })
  }
}
