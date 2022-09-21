import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() user:any;
  // @Output() addNewUser = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
