import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from '../todo.actions';
import { AppState } from '../index';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTodo = '';
  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select( (state) => state.todo.todos).subscribe( (todos) => (this.todos = todos));
  }

  addTodo() {
    if (this.newTodo.trim()) {
      const todo: Todo = {
        id: Date.now(),
        text: this.newTodo
      };
      this.store.dispatch(addTodo( {todo} ));
      this.newTodo = '';
    }
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo( { id } ));
  }
}
