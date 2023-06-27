import './search.css'

function Search({searchValue, setSearchValues}){
    return(
        <input 
            className="search" 
            placeholder="Buscar..."
            value = {searchValue}
            onChange={(e)=>{
                setSearchValues(e.target.value);
            }}
        />
    );
    
}

export { Search };