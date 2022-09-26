import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  userDetails: any;
  name!: string;
  mail!: string;
  id:number=0;
  isChecked=false;

  constructor(private routes: Router, private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      console.log(data);
      this.isChecked=data.hasOwnProperty('userid')? true:false;
      this.id=data['id']
    })


    // setTimeout(() => {
    //   this.route.navigate(['contactus'])

    // }, 2000);
  }
  submit() {
    console.log(this.name,this.mail);
    this.userDetails={
      
      'name':this.name,
      'Email':this.mail
    }
    this.appservice.postAllUsers(this.userDetails).subscribe(data=>{
    console.log(this.userDetails);
   console.log(data);
   
    })
      // this.listDetails = ;
    }
    update(){
      console.log(this.name,this.mail);
    this.userDetails={
      
      'name':this.name,
      'Email':this.mail
    }
    this.appservice.updateUser(this.id,this.userDetails).subscribe(data=>{
    console.log(this.userDetails);
    console.log(data);
    
    })
  }
// navigateToContactus(){
//   this.route.navigate(['contactus'])
// }
}

