import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  printData: Array<string> = [];
  // ischecked:boolean=false;


resdata(event:any){
this.printData.push(event);
console.log(this.printData);


}
}

