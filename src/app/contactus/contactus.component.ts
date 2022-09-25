import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
dataList:any;
  constructor(private appservice:AppService) { }

  ngOnInit(): void {
    this.appservice.getAllUsers().subscribe(data =>{
      // console.log(data)
      console.log(data);
      // this.dataList = data;
      
      
    }
      );
  }

}
