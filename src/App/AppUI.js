import React from "react";
import { Title } from "../components/title";
import { List } from "../components/list";
import { Item } from "../components/item";
import { Search } from "../components/search";
import { Button } from "../components/button";
import { TodosEmpty } from "../TodosEmpty";
import { TodosLoad } from "../TodosLoad";
import { TodosError } from "../TodosError";
import { TodosContext } from "../TodosContext";
import { Modal } from "../Modal";
import { FormAddTodo } from "../components/form";
function AppUI() {
  const { searched, validate, openModal, erase, loading, error } =
    React.useContext(TodosContext);
  return (
    //React.Fragment para contener los atributos xjs en el return sin errores y que no salga un div
    <div className="App">
      <Title />

      <section className="container-list">
        <Search />
        <List>
          {loading && <TodosLoad />}
          {!loading && searched < 1 && <TodosEmpty />}
          {error && !loading && <TodosError />}

          {searched.map((x) => (
            <Item
              key={x.text} // identificador de cada elemento guardado
              text={x.text}
              complete={x.complete}
              // funciones de validacion
              onComplete={() => {
                validate(x.text);
              }}
              onDelete={() => {
                erase(x.text);
              }}
            />
          ))}
        </List>
        <Button />
        {openModal && (
          <Modal>
            <FormAddTodo />
          </Modal>
        )}
      </section>
    </div>
  );
}

export { AppUI };
