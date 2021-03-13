import { filtrosValidos } from './../../filtro/filtro.actions';
import { AppState } from '../../app.reducer';
import { Todo } from './../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    // this.store.select('todos').subscribe( todos => this.todos = todos );
    this.store.subscribe(({ todos, filtro }) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }

}
