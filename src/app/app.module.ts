import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'headerComponent/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ChildComponent } from './child/child.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoParentComponent } from './todo-parent/todo-parent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusChildComponent } from './aboutus-child/aboutus-child.component';
import { ContactusChildComponent } from './contactus-child/contactus-child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ParentCompComponent } from './prent-module/parent-comp/parent-comp.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainAreaComponent,
    SidebarComponent,
    FooterComponent,
    ChildComponent,
    UserListComponent,
    UserDetailsComponent,
    TodoListComponent,
    TodoParentComponent,
    AboutusComponent,
    ContactusComponent,
    AboutusChildComponent,
    ContactusChildComponent,
    PageNotFoundComponent,
    // ParentCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
