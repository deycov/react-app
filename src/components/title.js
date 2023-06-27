import './title.css';

function Title({completed, total}){
  return( 
    <h1 className="title"> {completed} trabajos realizados de {total} </h1>
  );
}

export {Title};