
import React from 'react';
import './App.css';

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const todos=[
  {text:'Aprender JavaScript', completed:true},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Crear mi primera App con React', completed:false},
  {text:'Hacer Deploy de mi App', completed:false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
      </TodoList>
      <CreateTodoButton />      
    </React.Fragment>
  );
}

export default App;
