import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
  <div class="todo-app">
  <h1>
    Welcome to {{title}}!
  </h1>
  
  <todo-input (submit)="addItem($event)"></todo-input> <!--creating an item, triggers the event at InputComponent -->
  <ul>
    <!--loop: "go over all items of todoList array defined below,
 and print out an unnumbered list which contains the items' titles"
 Other directives: *ngIf, ex. if true, display -->
<li *ngFor="let item of todoList"> 
 <todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
</li>
</ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  title = 'Todo App';
  todoList;
  addItem(title:string) {
    this.todoList = this.todoListService.addItem({title});
    console.log(title);
  }

  removeItem(item) {
    console.log("remove", item);
    this.todoList = this.todoListService.removeItem(item);
  }
  
  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

}
