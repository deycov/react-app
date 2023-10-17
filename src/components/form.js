import React from "react";
import "./form.css";
import { TodosContext } from "../TodosContext";

function FormAddTodo() {
  const { setOpenModal, add } = React.useContext(TodosContext);
  const [inBlur, setInBlur] = React.useState(false);
  const [newTodo, setNewTodo] = React.useState("");
  const [err, setErr] = React.useState(false);

  const handleNewTodo = (e) => {
    e.target.value !== "" ? setErr(true) : setErr(false);
    setNewTodo(e.target.value);
  };

  const handleBlur = () => {
    window.addEventListener("click", (e) => {
      if (e.target.className.includes("form-textarea")) setInBlur(true);
      else setInBlur(false);
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const todo = {
          text: newTodo,
          completed: false,
        };
        add(todo);
        setOpenModal(false);
      }}
    >
      <div className="form-control">
        <textarea
          placeholder='Escribe algo como: "Comprar tomates"'
          className={inBlur ? "form-textarea inblur" : "form-textarea"}
          onChange={(e) => handleNewTodo(e)}
          value={newTodo}
        ></textarea>
        <div className="form-container_buttons">
          <button
            className="btn btn-cancel"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-success">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}

export { FormAddTodo };
