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
        return this.httpClient.get('http://localhost:3000/getuserbyid?id='+userId)
  }

  updateUser(userDetails:object){  
    return this.httpClient.put('http://localhost:3000/putuserbyid',userDetails)
  }
  delUserById(userId2:number){  
    return this.httpClient.delete('http://localhost:3000/del?id='+userId2)
  }
}
