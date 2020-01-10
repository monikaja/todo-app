import * as fromTodo from './todo.actions';
import {Todo} from "./model/todo.model";

const todo1 = new Todo('Save the world');
const todo2 = new Todo('Save the world again');
todo2.completed = true;
const initialState: Todo [] = [todo1, todo2];

export function todoReducer(state = initialState,
                            action: fromTodo.Actions) {
  switch (action.type) {
    case fromTodo.ADD_TODO: {
      const todo = new Todo(action.text);
      return [...state, todo];
    }
    case fromTodo.TOGGLE_TODO: {
      return state.map((todoEdit: Todo) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completed: !todoEdit.completed
          }
        }
        return todoEdit;
      });
    }
    case fromTodo.UPDATE_TODO: {
      return state.map((todoEdit: Todo) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            text: action.text
          }
        }
        return todoEdit;
      });
    }
    case fromTodo.DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    default:
      return state;
  }
}
