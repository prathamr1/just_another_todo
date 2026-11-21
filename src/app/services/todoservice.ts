import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todos.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class Todoservice {

    http = inject(HttpClient)
    getTodosfromAPI(){
        const url = `https://jsonplaceholder.typicode.com/todos`
        return this.http.get<Array<Todo>>(url);
    }
}
