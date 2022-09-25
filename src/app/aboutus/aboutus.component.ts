import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  listDetails={ id:14, name:'new user'}
  name!:string;
  mail!:string;
  constructor(private routes:Router,private route:ActivatedRoute,private appservice:AppService) { }

  ngOnInit(): void {

    
    // setTimeout(() => {
    //   this.route.navigate(['contactus'])
      
    // }, 2000);
    }
    // submit(){
    //   this.appservice.postAllUsers().subscribe(data =>{
    //     console.log(data)
  
    //     this.listDetails = data;
    // }
// navigateToContactus(){
//   this.route.navigate(['contactus'])
// }
}
