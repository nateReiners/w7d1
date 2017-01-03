import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selectors';
import initialState from './reducers/todos_reducer';

let todosArr = allTodos(initialState);
window.allTodos = todosArr;

let store = configureStore();
window.store = store;


document.addEventListener("DOMContentLoaded", function() {
  const title = (<h1>Todos App</h1>);

  ReactDOM.render(title, document.getElementById('content'));
});
