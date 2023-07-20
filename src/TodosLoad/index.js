import '../components/list.css';

function TodosLoad(){
  return(
    <>
      <li className='item'>
        <div className="list-item">
          <img className="checking" />

          <p className="checking"> </p>

          <img className="checking"/>
        </div>
      </li>
      <li className='item'>
        <div className="list-item">
          <img className="checking" />

          <p className="checking"> </p>

          <img className="checking"/>
        </div>
      </li>
      <li className='item'>
        <div className="list-item">
          <img className="checking" />

          <p className="checking"> </p>

          <img className="checking"/>
        </div>
      </li>
    </>
  );
}

export { TodosLoad };