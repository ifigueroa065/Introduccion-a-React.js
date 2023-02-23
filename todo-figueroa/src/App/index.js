import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   {text:'Aprender JavaScript', completed:true},
//   {text:'Tomar el curso de intro a react', completed:false},
//   {text:'Crear mi primera App con React', completed:false},
//   {text:'Hacer Deploy de mi App', completed:false}
// ];


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;