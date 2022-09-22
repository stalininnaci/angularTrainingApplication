import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusChildComponent } from './aboutus-child/aboutus-child.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusChildComponent } from './contactus-child/contactus-child.component';
import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [
  {
  path:'aboutus',
  component:AboutusComponent,
  children:[{
    path:'aboutus-child',
    component:AboutusChildComponent
  }]
},{
  path:'contactus',
  component:ContactusComponent,
  children:[{
    path:'contactus-child',
    component:ContactusChildComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
