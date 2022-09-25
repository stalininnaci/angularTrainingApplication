import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentCompComponent } from './parent-comp/parent-comp.component';

const routes: Routes = [
  {
    path:'',
    component:ParentCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentModuleRoutingModule { }
