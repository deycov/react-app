import './button.css';

function Button(){
    return(
        <div className="form-control">
            <button 
                className="btn-control"
                onClick={(ev)=>{
                    console.log("Presionaste el btn");
                    console.log(ev);
                }}
            > 
                +
            </button>
        </div>
    );
}   

export { Button }