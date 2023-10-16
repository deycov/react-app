import React from "react";
import "./button.css";
import { TodosContext } from "../TodosContext";

function Button() {
  const { setOpenModal } = React.useContext(TodosContext);
  return (
    <div>
      <button
        className="btn-control"
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      >
        +
      </button>
    </div>
  );
}

export { Button };
