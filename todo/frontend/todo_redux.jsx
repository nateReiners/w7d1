import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';


document.addEventListener("DOMContentLoaded", function() {
  const title = (<h1>Todos App</h1>);

  window.allTodos = allTodos;

  let store = configureStore();
  window.store = store;

  ReactDOM.render(title, document.getElementById('content'));
});
