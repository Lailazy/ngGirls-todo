import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core'; //remember to add input here! Else it doesn't know what to do woth @input

@Component({
  selector: 'todo-item',
  template: `

    <p class="todo-item todo-title" [ngClass]="{'todo-complete': isComplete}"> 
    
      <input type="checkbox" (click)="completeItem()"/>  
      {{todoItem.title}}
    </p>
    <button class="btn"(click)="removeItem()">
      remove
      </button> 
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();
  isComplete: boolean = false; //for checkbox
  constructor() { }

  removeItem() {
    console.log("event");
    this.remove.emit(this.todoItem);
  }
  completeItem() { //toggle
    this.isComplete = !this.isComplete;
  }
  ngOnInit() {
  }

}
