import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-todo-app',
  template: `<div class="flexContainer">

  <div class="todoSection">
      <form>
          <h1 class="headings">To-Do</h1>
          <input type="text" name="todo" [(ngModel)]="todo"/>
          <button (click)="onAddTodo()" class="successBtn" [hidden]="hiddenWhenEdit">ADD</button>
      </form>
  </div>

  <div class="cardSection">

  <div class="spaceBetween">
  <h1 class="headings">Tasks to do</h1>
  <h1 class="headings "> ✅ Completed Todos</h1>
  </div>
  <div *ngFor="let x of todosList" class="primary" cdkDrag>

  <div class="spaceBetween">
  <p class="todoText"> 🐻  {{x.task}}</p> 
  <p class="todoText">{{x.date}}</p> 
  </div>

  <button (click)="editTodo(x)" class="successBtn" [hidden]="selectedTodos.id==x.id">Edit</button>

  <div [hidden]="selectedTodos.id!=x.id">
  <button class="successBtn"  (click)="onSaveUpdatedData()">Save</button>
  <button class="deleteBtn"  (click)="onCancelEdit()">Cancel</button>
  </div>

  <button (click)="deletetodo(x.id)" class="deleteBtn">Delete</button>
 
  </div>

  </div>
</div>`,
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {
  public todo: any = ""
  public todosList: any = [{ task: "Learn React", id: "",date:new Date().toLocaleDateString() }]
  public updatedTodo: any = ""
  public selectedTodos: any = ""
  public hiddenWhenEdit = false

  // onAddTodo
  onAddTodo() {
    this.todosList.push({ task: this.todo, id: uuid(),date:new Date().toLocaleDateString() })
    this.todo = ""
    return
  }


  //editTodo
  editTodo(selectedTodo: any) {
    this.selectedTodos = selectedTodo
    const matchedTodo = this.todosList.find((x: any) => x.id == selectedTodo.id)
    this.todo = matchedTodo?.task
    this.hiddenWhenEdit = true
    return
  }

  //on save edit action 
  onSaveUpdatedData() {
    this.updatedTodo = this.todosList.find((x: any) => x.id === this.selectedTodos.id)
    this.updatedTodo.task = this.todo
    this.updatedTodo.id = this.updatedTodo.id
    this.updatedTodo.date = new Date().toLocaleDateString()
    this.todo = ""
    this.selectedTodos = ""
    this.hiddenWhenEdit = false
    return
  }

  //on cancel edit
  onCancelEdit() {
    this.todo = ""
    this.selectedTodos = ""
    this.hiddenWhenEdit = false
    return
  }
  // deletetodo
  deletetodo(id: any) {
    return this.todosList = this.todosList.filter((x: any) => x.id !== id)
  }
}
