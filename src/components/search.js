import React from "react";
import "./search.css";
import { TodosContext } from "../TodosContext";

function Search() {
  const { searchValue, setSearchValues } = React.useContext(TodosContext);
  return (
    <input
      className="search"
      placeholder="Buscar..."
      value={searchValue}
      onChange={(e) => {
        setSearchValues(e.target.value);
      }}
    />
  );
}

export { Search };
