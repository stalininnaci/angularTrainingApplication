import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private routes:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.route.navigate(['contactus'])
      
    // }, 2000);
    }
// navigateToContactus(){
//   this.route.navigate(['contactus'])
// }
}
