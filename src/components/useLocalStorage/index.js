//  custom hook localstorage
import React from "react";

function useLocalStorage(KEY, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [load,setLoad] = React.useState(true);
  const [err,setErr] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=>{
      try{
        const dataLocalStorage = localStorage.getItem(KEY);
        let infoLocal;
        
        if (!dataLocalStorage) {
          localStorage.setItem(KEY, JSON.stringify(initialValue));
          infoLocal = [];
        } else {
          infoLocal = JSON.parse(dataLocalStorage);
          setItem(infoLocal);  
          setLoad(false);
        }
      } catch(e){
        setErr(true);
        setLoad(false);
      }
    },2000)
  },[])
      
  const addNewItem = (newData) => {
    localStorage.setItem(KEY, JSON.stringify(newData));
    setItem(newData);
  }

  return {item, addNewItem, load, err};
}

/** 
 * const arr = [{text: 'asdasd', complete: true}, 
                {text: 'kmkmk', complete: false},
                {text: 'e', complete: false},
                {text: 'Añadido', complete: false},
                {text: 'Añadida', complete: false},
                {text: 'Añadide', complete: false},
                {text: 'Añadimos', complete: false}];
 * localStorage.setItem('TODOS_V1',JSON.stringify(arr));
 * 
 * **/


export { useLocalStorage }