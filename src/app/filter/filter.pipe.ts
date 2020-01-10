import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "../todo/model/todo.model";
import {validFilters} from "./filter.action";

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): any {
    console.log(filter);
    console.log(todos);
    switch (filter) {
      case "DONE":
        return todos.filter(todo => todo.done);
      case "UNDONE":
        return todos.filter(todo => !todo.done);
    }
    return todos;
  }

}
