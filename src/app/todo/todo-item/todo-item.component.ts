import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../model/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {DeleteTodoAction, ToggleTodoAction, UpdateTodoAction} from "../todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputElement', {static: false}) txtInputElement: ElementRef;

  checkField : FormControl;
  txtInput : FormControl;
  editing : boolean = false;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {

    this.checkField = new FormControl(this.todo.done);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkField.valueChanges.subscribe((value)=>{
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });

  }

  edit(){
    this.editing = true;

    setTimeout(()=>{
      this.txtInputElement.nativeElement.select();
    }, 1)
  }

  endEdition(){
    this.editing = false;

    if(!this.txtInput.valid || this.txtInput.value === this.todo.text){
      return;
    }

    const action = new UpdateTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  deleteTodo(){
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
