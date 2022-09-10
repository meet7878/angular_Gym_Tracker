import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http:HttpClient) { }

  getAllWorkouts():Observable<any>{
    return this.http.get(environment.url+"admin/workout")
  }
  addWorkout(workOut:any):Observable<any>{
    return this.http.post(environment.url+"admin/workout",workOut)
  }
  deleteWorkouts(workoutId:any):Observable<any>{
    return this.http.delete(environment.url+"admin/workout/"+workoutId)
  }
  getWorkoutByIdApi(workoutId:any):Observable<any>{
    return this.http.get(environment.url+"admin/workout/"+workoutId)
  }
}
