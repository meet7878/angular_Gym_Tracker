import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WorkoutService } from '../service/workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  workouts: Array<any> = []
  constructor(private workoutService: WorkoutService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllWorkouts()
  }
  getAllWorkouts() {
    this.workoutService.getAllWorkouts().subscribe(resp => {
      console.log("Get All Workout Details");
      console.log(resp);
      this.workouts = resp
    })
  }
  deleteWorkout(id: any) {
    console.log("Id....." + id);

    this.workoutService.deleteWorkouts(id).subscribe(resp => {
      this.toastr.success("Workout Deleted...❌")
      this.workouts = this.workouts.filter(w => w.workoutId != id)
    }, err => {
      console.log(err);
      this.toastr.error(err);
    })
    // updateWorkout(){

    // }
  }
}
