import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
pesonalDetailApi(user:any):Observable<any>{
  return this.http.post("http://localhost:9797/public/personal",user)
}

getofferApi():Observable<any>{
   return this.http.get("http://localhost:9797/plan/alloffer")
}
addofferApi(id:number,userId:any):Observable<any>{
  return this.http.get(environment.url+"public/offer/"+userId+"/"+id)
}
}
