import React from "react";
import "./form.css";

function FormAddTodo() {
  const [inBlur, setInBlur] = React.useState(false);
  const [err, setErr] = React.useState(false);

  const handleErrText = (e) => {
    e.target.value !== "" ? setErr(true) : setErr(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="form-control">
        <textarea
          placeholder='Escribe algo como: "Comprar tomates"'
          className={inBlur ? "btn" : "btn"}
          onFocus={() => {
            setInBlur((state) => !state);
          }}
          onChange={(e) => handleErrText(e)}
        ></textarea>
        <div className="form-container_buttons">
          <button
            className="btn"
            onClick={(ev) => {
              console.log("Presionaste el btn");
              console.log(ev);
            }}
          >
            Cancelar
          </button>
          <button
            className="btn"
            onClick={(ev) => {
              console.log("Presionaste el btn");
              console.log(ev);
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}

export { FormAddTodo };