// todo.actions.ts
import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
export const removeTodo = createAction('[Todo] Remove Todo', props<{ id: number }>());
