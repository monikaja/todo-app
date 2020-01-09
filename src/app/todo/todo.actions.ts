import {Action} from "@ngrx/store";
import {Todo} from "./model/todo.model";

export const ADD_TODO = '[TODO] Add todo';
export const TOGGLE_TODO = '[TODO] Complete todo';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public text: string) {
  }

}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {
  }

}

export type Actions = AddTodoAction
  | ToggleTodoAction;
