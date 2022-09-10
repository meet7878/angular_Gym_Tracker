import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }
getAllUser():Observable<any>{
 console.log("all user");
 
  return this.http.get(environment.url+"public/user");
    
}

getUserIdApi(UserId:any):Observable<any>{
  console.log("get Alluser API "); 
  return this.http.get(environment.url+"public/user/"+UserId)
}

getpersonalApi(UserId:any):Observable<any>{
  console.log("get particlular one user one personal data");
  return this.http.get(environment.url+"public/personal/"+UserId)
}

getpersonalofferApi(userId:any):Observable<any>{
  console.log(userId);
  
  console.log("adminservice getpersonalofferApi.....")
  return this.http.get(environment.url+"public/alloffer/"+userId)
}

updateUser(user:any):Observable<any>{
  console.log("updateUser...........Api")
  return this.http.put(environment.url+"public/update",user)
}

offerUser(offer:any):Observable<any>{
  console.log("offer post Api Work.....")
  return this.http.post(environment.url+"plan/offer",offer)
}


}
