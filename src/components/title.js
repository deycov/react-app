import React from "react";
import { TodosContext } from "../TodosContext";
import "./title.css";

function Title() {
  const { completedTodos, totalTodos, greatings } =
    React.useContext(TodosContext);

  return (
    <>
      <h1 className="title">
        {" "}
        {completedTodos} trabajos realizados de {totalTodos}{" "}
      </h1>
      <h2 className="greatings"> {greatings} </h2>
    </>
  );
}

export { Title };
