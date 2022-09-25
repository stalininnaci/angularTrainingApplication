import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusChildComponent } from './aboutus-child/aboutus-child.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusChildComponent } from './contactus-child/contactus-child.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
  // {
  // path:"",
  // redirectTo:'aboutus',
  // pathMatch:'full'
  // },
  {
  path:'go-to-parent',
  loadChildren:()=>import ('./parent-module/parent-module-routing.module')
  .then(data=> data.ParentModuleRoutingModule)
  },
  {
  path:'aboutus',
  component:AboutusComponent,
  children:[
  {
    path:'user-list',
    component:UserListComponent,
    children:[
      {
        path:'user/:id',
        component:UserDetailsComponent

      }
    ]
  }
]
},{
  path:'contactus',
  component:ContactusComponent,
  children:[{
    path:'contactus-child',
    component:ContactusChildComponent
  }]
},
{
  path:"**",
  component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
