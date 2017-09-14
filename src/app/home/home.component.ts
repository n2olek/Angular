import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    todoList= [];

  constructor() { }

  ngOnInit() {
    this.todoList =[
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
  }



}
