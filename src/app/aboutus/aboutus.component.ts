import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.route.navigate(['contactus'])
      
    // }, 2000);
    }
// navigateToContactus(){
//   this.route.navigate(['contactus'])
// }
}
