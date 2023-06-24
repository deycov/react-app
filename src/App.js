
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
  return (
    //React.Fragment para contener los atributos xjs en el return sin errores y que no salga un div
    <div className='App'>
     
      <div>
        <Title/>
      </div>  
      <Search/>
      <List>
          {arr.map(x => ( <Item 
            key={x.text} // identificador de cada elemento guardado
            text={x.text} 
            complete={x.complete} 
          /> ))}
      </List>
      <Button/>
    </div>
  );
}

export { App };
