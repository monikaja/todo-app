import {Component, OnInit} from '@angular/core';
import * as fromFilter from "../../filter/filter.action";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {Todo} from "../model/todo.model";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.validFilters[] = ['ALL', 'DONE', 'UNDONE'];
  currentFilter : fromFilter.validFilters;
  undone : number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.subscribe(state=>{
      this.currentFilter = state.filter;
      this.undone = state.todos.filter((todo:Todo)=> !todo.done).length;
    })
  }

  changeFilter(newFilter: fromFilter.validFilters) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }
}
