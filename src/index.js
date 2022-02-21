import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './components/MyList/MyList';
import GlobalStyle from './globalStyles';

// For the sake of demonstration, if no todos exist in local storage, the example
// data from the codealong will be used to populate the todo list.
let todos = [];

// Check if the key 'todoList' exists in localstorage.
if (localStorage.getItem('todoList') !== null) {
  // If there is an object stored use that.
  todos = JSON.parse(localStorage.getItem('todoList'));
} else {
  // Otherwise use the example data.
  todos = [
    { id: 1, task: "Buy ice cream.", done: true },
    { id: 2, task: "Eat ice cream.", done: true },
    { id: 3, task: "Go to the gym.", done: false }
  ];
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MyList todos={todos} />
  </React.StrictMode>,
  document.getElementById('root')
);
