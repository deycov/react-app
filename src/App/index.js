import React from "react";
import "./App.css";
import { TodosProvider } from "../TodosContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    <TodosProvider>
      <AppUI />
    </TodosProvider>
  );
}

export { App };
