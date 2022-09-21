import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  // printData!:string
  getData!: string;
  isdisable:boolean=false
  @Output() todoEvent = new EventEmitter();


  // @Input()  indexUser
  constructor() { }

  ngOnInit(): void {
  }
  btnGetData() {
    console.log("button working");
    console.log(this.getData);
    this.todoEvent.emit(this.getData)
    this.getData = '';
    this.isdisable=!this.isdisable

    //this.printData
  }
  
}
