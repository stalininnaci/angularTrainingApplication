import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


interface user{
  id:number,
  first_name:string,
  last_name:string,
  email:string,
  avatar:string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 userList:user[]=[]
  constructor(private route:Router, private routes:ActivatedRoute ) { }

  ngOnInit(): void {

    this.userList = [
      {
        "id": 1,
        "email": "devasuvi@gmail.com",
        "first_name": "deventhira",
        "last_name": "suvi",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 2,
        "email": "ycsrimathi@gmail.com",
        "first_name": "yogesh",
        "last_name": "srimathi",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 3,
        "email": "meenukutty@gmail.com",
        "first_name": "meena",
        "last_name": "rajendran",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 4,
        "email": "suriyapriyas@gmail.com",
        "first_name": "suriya",
        "last_name": "saravanan",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 5,
        "email": "gokulbubloo@gmail.com",
        "first_name": "gokuls",
        "last_name": "somu",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    }
  ]

  }
  userRemove(i:number){
    this.userList.splice(i,1)
  }
  navigateToUserDetails(id:number){
this.route.navigate(['user',id],{relativeTo:this.routes})
  }

}
