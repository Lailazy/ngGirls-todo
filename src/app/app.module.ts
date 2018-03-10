import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoListService } from './todo-list.service'; //import service created
import { TodoListStorageService } from './todo-list-storage.service';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';



@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoListService, TodoListStorageService], //remember to add imported services to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
