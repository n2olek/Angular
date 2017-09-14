import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { }

  todoList: Array<any>= [
        {
            "id" : "345",
            "name" : "AAA"
        },
        {
            "id" : "222",
            "name" : "BBB"
        },
        {
            "id" : "345",
            "name" : "NNN"
        }
  ];

  getTodoList(): any[] {
  	return this.todoList;
  }

  setTodoList(data): void {
    console.log(data);
    this.todoList.push(data);
    console.log(this.todoList);
  }

}
