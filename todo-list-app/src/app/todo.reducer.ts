// todo.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Todo } from './todo.model';
import { addTodo, removeTodo } from './todo.actions';

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),
  on(removeTodo, (state, { id }) => ({ ...state, todos: state.todos.filter((todo) => todo.id !== id) }))
);
