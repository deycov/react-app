import React from 'react';
import './App.css';

import { Title } from './components/title'; 
import { List } from './components/list';
import { Item } from './components/item';
import { Search } from './components/search';
import { Button } from './components/button';
import { useLocalStorage } from './components/useLocalStorage';

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
    const index = newData.findIndex((todo) => todo.text == data);
    newData[index].complete = true;
    addNewTodos(newData);
  }

  const erase = (data) => {
    const newData = [...todos];
    const index = newData.findIndex((todo) => todo.text == data);
    newData.splice(index,1);
    addNewTodos(newData);
  } 
  
  return (
    //React.Fragment para contener los atributos xjs en el return sin errores y que no salga un div
    <div className='App'>
      
      <Title
        completed = {completedTodos}
        total = {totalTodos}  
        greatings = {greatings}
      />  
      <section className='container-list'>
        <Search
          searchValue={searchValue}
          setSearchValues={setSearchValues}
        />
        <List>
            {searched.map(x => ( <Item 
              key={x.text} // identificador de cada elemento guardado
              text={x.text} 
              complete={x.complete}
              // funciones de validacion
              onComplete = {()=>{validate(x.text);}}
              onDelete = {()=>{erase(x.text);}}
            /> ))}
        </List>
        <Button/>
      </section>
    </div>
  );
}

export { App };
