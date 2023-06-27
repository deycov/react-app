import './title.css';

function Title({completed, total, greatings}){
  return( 
    <>
      <h1 className="title"> {completed} trabajos realizados de {total} </h1>
      <h2 className="greatings"> {greatings} </h2>
    </>
  );
}

export {Title};