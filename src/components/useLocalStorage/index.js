//  custom hook localstorage
import React from "react";

function useLocalStorage(KEY, initialValue) {
  const dataLocalStorage = localStorage.getItem(KEY);
  let infoLocal;
  
  if (!dataLocalStorage) {
    localStorage.setItem(KEY, JSON.stringify(initialValue));
    infoLocal = [];
  } else {
    infoLocal = JSON.parse(dataLocalStorage);
  }

  const [item, setItem] = React.useState(infoLocal);

  const addNewItem = (newData) => {
    localStorage.setItem(KEY, JSON.stringify(newData));
    setItem(newData);
  }
  
  return [item, addNewItem];
}

export { useLocalStorage }