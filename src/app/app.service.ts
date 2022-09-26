import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers(){
    return this.httpClient.get(`http://localhost:3000/sql`)
  }

  postAllUsers(userDetails:object){
    console.log("entering app services");
    console.log(userDetails);
    
    return this.httpClient.post('http://localhost:3000/sqlpost',userDetails)
  }
  getUserById(userId:number){
    console.log("==========>",userId);
    
    return this.httpClient.get(`http://localhost:3000/getuserbyid/${userId}`)
  }
  // updateUser(userid:number,userDetails:any){
  //   return this.httpClient.put('http://localhost:3000/sqlpost/${userId.id}')
  // }
  updateUser(id:number,userDetails:object){
    return this.httpClient.put('http:localhost:3000/putuserbyid'+id,userDetails)
  }
}
