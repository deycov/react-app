import './search.css'

function Search({searchValue, setSearchValue}){
    return(
        <input 
            className="search" 
            placeholder="Buscar..."
            value = {searchValue}
            onChange={(e)=>{
                setSearchValue(e.target.value);
            }}
        />
    );
    
}

export { Search };