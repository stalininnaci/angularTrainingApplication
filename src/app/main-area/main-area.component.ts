import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {
  
  // userinput:any;
maintitle:any="main area working-"
reprint:any;
  isdisabled=true;
  constructor() { }

  ngOnInit(): void {
  }
onbtnclick(){
  this.isdisabled=true
  //  this.userinput="";
   this.reprint="";
  console.log("button working");
}
onUserInput(event:any){
  // this.reprint=event.target.value
  this.isdisabled=false
//  this.userinput=event.target.value
// console.log();
}
toggle(){
  this.isdisabled= !this.isdisabled
 }
}
