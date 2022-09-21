import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-parent',
  templateUrl: './todo-parent.component.html',
  styleUrls: ['./todo-parent.component.scss']
})
export class TodoParentComponent implements OnInit {
@Input() takeData:any;
  constructor() { }

  ngOnInit(): void {




  }

}
