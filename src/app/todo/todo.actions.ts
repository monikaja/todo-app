import {Action} from "@ngrx/store";

export const ADD_TODO = '[TODO] Add todo';
export const TOGGLE_TODO = '[TODO] Complete todo';
export const TOGGLE_ALL_TODO = '[TODO] Complete all todos';
export const UPDATE_TODO = '[TODO] Update text';
export const DELETE_TODO = '[TODO] Delete todo';

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

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public id: number) {
  }

}

export class UpdateTodoAction implements Action {
  readonly type = UPDATE_TODO;

  constructor(public id: number, public text: string) {
  }

}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public done: boolean) {
  }

}

export type Actions = AddTodoAction
  | UpdateTodoAction
  | DeleteTodoAction
  | ToggleAllTodoAction
  | ToggleTodoAction;
