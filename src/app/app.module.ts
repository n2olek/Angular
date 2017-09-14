import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTodoComponent} from './add-todo/add-todo.component';
import { HomeComponent} from './home/home.component';

import { TodoService } from './service/todo-service.service';

const route: Routes =[
    { path: "addTodo", component: AddTodoComponent},
    { path: "", component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTodoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
