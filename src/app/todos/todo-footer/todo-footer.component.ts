import { limpiarTodos } from './../todo.actions';
import * as actions from './../../filtro/filtro.actions';
import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos', 'completado', 'pendientes'];

  pendientes: number = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    // this.store.select('filtro').subscribe( filtro => this.filtroActual = filtro );
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado ).length;
    });
  }

  cambiarFiltro(filtro: actions.filtrosValidos) {
    this.store.dispatch(actions.setFiltro({ filtro: filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(limpiarTodos());
  }

}
