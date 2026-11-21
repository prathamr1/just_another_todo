import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todos.types'
import { Highlightcompleted } from '../../directs/highlightcompleted';
import { UpperCasePipe } from '@angular/common';
@Component({
  imports: [Highlightcompleted, UpperCasePipe],
  selector: 'app-todo-item',
  styleUrl: './todo-item.scss',
  templateUrl: './todo-item.html',
})
export class TodoItem {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked(){
    this.todoToggled.emit(this.todo())
  }
}
