import {Todo} from "./todo/model/todo.model";
import {ActionReducerMap} from "@ngrx/store";
import * as fromTodo from "./todo/todo.reducer";
import * as fromFilter from './filter/filter.reducer';
import {validFilters} from "./filter/filter.action";

export interface AppState {
  todos: Todo[];
  filter: validFilters;
}

export const appReducers : ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filter: fromFilter.filterReducer
};
