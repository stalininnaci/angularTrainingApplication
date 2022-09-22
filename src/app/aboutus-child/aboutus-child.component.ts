import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus-child',
  templateUrl: './aboutus-child.component.html',
  styleUrls: ['./aboutus-child.component.scss']
})
export class AboutusChildComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe((user)=>{
    console.log(user);
  })



  }

}
