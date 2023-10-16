import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
const TodosContext = React.createContext();
function TodosProvider({ children }) {
  const {
    item: todos,
    addNewItem: addNewTodos,
    load: loading,
    err: error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValues] = React.useState(""); // useState hace referencia a la informacion inicial que obtendrá react en sus estados
  const [openModal, setOpenModal] = React.useState(false);
  // Variables de estado *Búsqueda* lo que ingresan

  const completedTodos = todos.filter((todo) => todo.complete).length;

  const totalTodos = todos.length;

  let greatings = "";

  if (totalTodos === 0 && !loading) {
    greatings = "Felicidades por terminar las tareas";
  }

  const searched = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchTodo = searchValue.toLowerCase();
    return todoText.includes(searchTodo);
  });

  const validate = (data) => {
    const newData = [...todos];
    const index = newData.findIndex((todo) => todo.text === data);
    newData[index].complete = true;
    addNewTodos(newData);
  };

  const erase = (data) => {
    const newData = [...todos];
    const index = newData.findIndex((todo) => todo.text === data);
    newData.splice(index, 1);
    addNewTodos(newData);
  };

  const add = (newTodo) => {
    const newData = [...todos];
    newData.push(newTodo);
    addNewTodos(newData);
  };

  return (
    <TodosContext.Provider
      value={{
        completedTodos,
        totalTodos,
        greatings,
        searchValue,
        setSearchValues,
        openModal,
        setOpenModal,
        searched,
        validate,
        erase,
        add,
        loading,
        error,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export { TodosContext, TodosProvider };
