import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input('childComp') user:any;
  @Input() indexUser:any;
@Output() userRemoveEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
userRemoving(){
  console.log(this.indexUser)
this.userRemoveEvent.emit(this.indexUser)
  // this.user.splice()
}
}
