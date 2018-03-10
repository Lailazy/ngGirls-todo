import { Component, OnInit, Output, EventEmitter } from '@angular/core'; //remember to add

@Component({
  selector: 'todo-input',
  template: `
  <input class="todo-input"[value]="title" 
  (keyup.enter)="changeTitle(inputElement.value)"
  #inputElement> <!-- local variable -->
  <button class="btn btn-hover " (click)="changeTitle(inputElement.value)">
    Save
  </button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title: string ='';

  constructor() {
    this.changeTitle("input title");
   }

   changeTitle(newTitle: string): void{
    this.submit.emit(newTitle);
    console.log("ChangeTitle metode"); //event reaction
  }
  ngOnInit() {
  }
  

}
