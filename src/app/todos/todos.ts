import { Component, inject, OnInit, signal } from '@angular/core';
import { Todoservice } from '../services/todoservice';
import { Todo } from '../model/todos.types'
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';
@Component({
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  selector: 'app-todos',
  styleUrl: './todos.scss',
  templateUrl: './todos.html',
})
export class Todos implements OnInit {
  todoService = inject(Todoservice);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService
    .getTodosfromAPI()
    .pipe(
      catchError((err) => {console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }

  updateitem(todoItems:Todo){
    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if (todo.id == todoItems.id){
          return {
            ...todo,
            completed:!todo.completed
          }
        }
        return todo;
      })
    })
  }
}