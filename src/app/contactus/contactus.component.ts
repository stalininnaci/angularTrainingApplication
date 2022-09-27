import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
dataList:any;
userid2!:number;
ischeck=false;
is_deleted!:number;
id!:number;
deleteList:any;
  constructor(private appservice:AppService, private getRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   
     this.getUserDetails();
    // this.editUser(userid)
      // this.getUserById();  
    
   
  }
  getUserDetails(){
    this.appservice.getAllUsers().subscribe(data =>{
      // console.log(data)
      console.log('ngoninit enters',data);
      this.dataList = data;
     console.log(this.dataList);
    })
  }
  
 editUser(userid:number){

  this.router.navigate(["user",userid],{relativeTo:this.getRouter})

  // this.appservice.updateUser(this.dataList).subscribe(data=>{
  //   console.log(this.dataList);
  //  console.log(data);
    }
  deleteUser(userid:number){
    console.log('kkkkkkkkkkkk',userid);
    
    // this.deleteList={
    //   'id':this.id,
    //   'is_deleted':this.is_deleted
    // }
      this.userid2=userid
      console.log(this.userid2);
      this.appservice.delUserById(this.userid2).subscribe(data=>{
     console.log('deleted data',this.userid2);
     console.log(data);
       this.getUserDetails(); 
      })
  }

  
  
}
 

