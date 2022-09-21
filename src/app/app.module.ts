import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'headerComponent/header.component';
import { FormsModule } from '@angular/forms';
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
    TodoParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
