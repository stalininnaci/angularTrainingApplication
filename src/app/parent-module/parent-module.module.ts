import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentModuleRoutingModule } from './parent-module-routing.module';
import { ParentCompComponent } from './parent-comp/parent-comp.component';


@NgModule({
  declarations: [
    ParentCompComponent
  ],
  imports: [
    CommonModule,
    ParentModuleRoutingModule
  ]
})
export class ParentModuleModule { }
