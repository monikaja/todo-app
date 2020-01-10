import {Component, OnInit} from '@angular/core';
import {AppState} from "../app.reducers";
import {Store} from "@ngrx/store";
import {ToggleAllTodoAction, ToggleTodoAction} from "./todo.actions";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  checkField : FormControl;
  allDone : boolean = false;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.checkField = new FormControl(this.allDone);
    this.checkField.valueChanges.subscribe((value)=>{
      this.allDone = value;
      const action = new ToggleAllTodoAction(this.allDone);
      this.store.dispatch(action);
    });
  }

}
