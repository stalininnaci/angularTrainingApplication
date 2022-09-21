import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {
  
  
maintitle:any="main area working-"
reprint:string="";
isActive:boolean=true
   isdisabled=true;
  //  houses:Array<string>=['Stark','Lannister','Targaryan','Valaryan']
   houses=[{houseId:1,housename:"stark"},{houseId:2,housename:'Lannister'},
   {houseId:3,housename:"Targaryan"},{houseId:4,housename:"Valaryan"}]
  constructor() { }

  ngOnInit(): void {
  }
onbtnclick(){
   this.reprint="";
  //  this.isdisabled=false;
  console.log("button working");
}

 toggle(){
   this.isdisabled= !this.isdisabled
  }
}
