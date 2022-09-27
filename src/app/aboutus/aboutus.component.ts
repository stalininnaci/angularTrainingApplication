import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
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
 user:any;
  constructor(private routes: Router, private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit(): void {

  this.user=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    pass: new FormControl(null,[Validators.required,])
  })


    this.route.params.subscribe((data)=>{
      console.log(data);
      this.isChecked=data.hasOwnProperty('userid')? true:false;
      this.id=data['userid']
      if(this.isChecked){
        this.getUserById();
      }
    })


    // setTimeout(() => {
    //   this.route.navigate(['contactus'])

    // }, 2000);
  }
  get form(){
    return this.user.controls
  }
  submit() {
    console.log(this.user);
  //   this.userDetails={  
  //     'name':this.name,
  //     'Email':this.mail
  //   }
  //   this.appservice.postAllUsers(this.userDetails).subscribe(data=>{
  //   console.log(this.userDetails);
  //  console.log(data);
  //  this.routes.navigate(["contactus"])
  //   })
      // this.listDetails = ;
    }
    getUserById(){
      // console.log("----------->",[this.dataList.id]);
      
      
      this.appservice.getUserById(this.id).subscribe(data=>{
        console.log(data);
        this.userDetails = data;
        this.name = this.userDetails[0]['name'];
        this.mail = this.userDetails[0]['Email'];
        
      })
    }
    update(){
      console.log(this.name,this.mail);
    this.userDetails={
      'id':this.id,
      'name':this.name,
      'Email':this.mail
    }
    this.appservice.updateUser(this.userDetails).subscribe(data=>{
    console.log('update data',this.userDetails);
    console.log(data);
    this.routes.navigate(["contactus"])
    })
  }
// navigateToContactus(){
//   this.route.navigate(['contactus'])
// }
}

