import React from 'react';
import './App.css';

import { AppUI } from './AppUI';
import { useLocalStorage } from '../components/useLocalStorage';

function App() {
  
  const [todos, addNewTodos] = useLocalStorage('TODOS_V1',[]);
  
  const [searchValue, setSearchValues] = React.useState(''); // useState hace referencia a la informacion inicial que obtendrá react en sus estados
  // Variables de estado *Búsqueda* lo que ingresan
  
  const completedTodos = todos.filter((todo) => todo.complete).length;

  const totalTodos = todos.length;
  
  let greatings = '';
  
  if(totalTodos === 0){
    greatings = "Felicidades por terminar las tareas";
  }

  const searched = todos.filter((todo)=>{
    const todoText = todo.text.toLowerCase();
    const searchTodo = searchValue.toLowerCase();
    return todoText.includes(searchTodo);
  });

  const validate = (data) => {
    const newData = [...todos];
    const index = newData.findIndex((todo) => todo.text === data);
    newData[index].complete = true;
    addNewTodos(newData);
  }

  const erase = (data) => {
    const newData = [...todos];
    const index = newData.findIndex((todo) => todo.text === data);
    newData.splice(index,1);
    addNewTodos(newData);
  } 
  
  return (
    
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      greatings={greatings}
      searchValue={searchValue}
      setSearchValues={setSearchValues}
      searched={searched}
      validate={validate}
      erase={erase}
    />
  );
}

export { App };
