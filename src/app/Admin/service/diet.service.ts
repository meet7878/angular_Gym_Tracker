import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  constructor(private http:HttpClient) { }

  getAllDiets():Observable<any>{
    return this.http.get(environment.url+"admin/diet")
  }
  addDiet(diet:any):Observable<any>{
    return this.http.post(environment.url+"admin/diet",diet)
  }
  deleteDiet(dietId:any):Observable<any>{
    return this.http.delete(environment.url+"admin/diet/"+dietId)
  }
  getDietByIdApi(dietId:any):Observable<any>{
    return this.http.get(environment.url+"admin/diet/"+dietId)
  }
}

