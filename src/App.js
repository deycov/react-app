import React from 'react';
import './App.css';

import { Title } from './components/title'; 
import { List } from './components/list';
import { Item } from './components/item';
import { Search } from './components/search';
import { Button } from './components/button';


const arr = [
  {
      text: "Contenido texto 1",
      complete: true
  },
  {
      text: "Contenido texto 2",
      complete: false
  },
  {
      text: "Contenido texto 3",
      complete: false
  },
  {
      text: "Contenido texto 4",
      complete: true
  }
]


function App() {
  // Variables de estado
  const [todos, setTodos] = React.useState(arr); 
  // Manipulacion de informacion con estados de react
  // Seria como guardar la información del backend para renderizarla en el front 
  const [searchValue, setSearchValues] = React.useState();
  // Variables de estado *Búsqueda* lo que ingresan


  const completedTodos = todos.filter((todo) => todo.complete).length;
  const totalTodos = todos.length;

  const searched = todos.filter((todo)=>{
    return todo.text.includes(searchValue);
  });

  console.log(completedTodos,totalTodos);

  return (
    //React.Fragment para contener los atributos xjs en el return sin errores y que no salga un div
    <div className='App'>
      
      <Title
        completed  = {completedTodos}
        total=  {totalTodos}  
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
            /> ))}
        </List>
        <Button/>
      </section>
    </div>
  );
}

export { App };
