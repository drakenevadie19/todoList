// index.ts
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer, TodoState } from './todo.reducer';

export interface AppState {
  todo: TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: todoReducer,
};
