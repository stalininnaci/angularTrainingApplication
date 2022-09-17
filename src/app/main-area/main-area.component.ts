import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {
  reprint:any;
  isdisabled=true;
  userinput:any;
maintitle:any="main area working da venna-"
  constructor() { }

  ngOnInit(): void {
  }
onbtnclick(){
  this.isdisabled=true
  // this.userinput="";
  console.log("button working");
}
onUserInput(event:any){
  this.isdisabled=false
this.userinput=event.target.value
// console.log();
}
toggle(){
  this.isdisabled= !this.isdisabled
 }
}
