import { Title } from '../components/title'; 
import { List } from '../components/list';
import { Item } from '../components/item';
import { Search } from '../components/search';
import { Button } from '../components/button';

function AppUI({
  completedTodos,
  totalTodos,
  greatings,
  searchValue,
  setSearchValues,
  searched,
  validate,
  erase,
  loading,
  error
}) {

  return (
    //React.Fragment para contener los atributos xjs en el return sin errores y que no salga un div
    <div className='App'>
      <Title
        completed={completedTodos}
        total={totalTodos}
        greatings={greatings}
      />
      <section className='container-list'>
        <Search
          searchValue={searchValue}
          setSearchValues={setSearchValues}
        />
        <List>
          {loading && <h2> Cargando datos... </h2>}
          {(!loading && searched < 1) && <h2> Crea un nuevo todo..! </h2> }
          {(error && !loading) && <h2>Ha ocurrido un problema de conexión, intentalo más tarde</h2>}

          {searched.map(x => (<Item
            key={x.text} // identificador de cada elemento guardado
            text={x.text}
            complete={x.complete}
            // funciones de validacion
            onComplete={() => { validate(x.text); }}
            onDelete={() => { erase(x.text); }}
          />))}
        </List>
        <Button />
      </section>
    </div>
  );
}

export { AppUI };