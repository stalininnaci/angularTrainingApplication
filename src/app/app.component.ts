import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  printData: Array<string> = [];
  // ischecked:boolean=false;


resdata(data:any){
this.printData.push(data);
console.log(this.printData);


}
}

