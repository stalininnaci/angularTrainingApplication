import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-parent',
  templateUrl: './todo-parent.component.html',
  styleUrls: ['./todo-parent.component.scss']
})
export class TodoParentComponent implements OnInit {
@Input() takeData:any;
@Input() listIndex:any;
@Input() takeArray:any[]=[];
ischecked:boolean=false;
  constructor() { }

  ngOnInit(): void {

  }

  dataRemove(){
    this.takeArray.splice(this.listIndex,1)
    console.log(this.takeArray);
    
  }

}
