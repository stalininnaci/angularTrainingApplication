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
userid!:number;
ischeck=false;


  constructor(private appservice:AppService, private getRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.appservice.getAllUsers().subscribe(data =>{
      // console.log(data)
      console.log('ngoninit enters',data);
      //this.dataList = data;
     

      this.getUserById();  
    });
   
  }
  getUserById(){
    console.log("----------->",[this.dataList.id]);
    
    
    this.appservice.getUserById(this.dataList).subscribe(data=>{
      console.log(data);
      
    })
  }
 editUser(userid:number){

  this.router.navigate(["aboutus",userid],{relativeTo:this.getRouter})

  // this.appservice.updateUser(this.dataList).subscribe(data=>{
  //   console.log(this.dataList);
  //  console.log(data);
    }
    

  
  

 }

