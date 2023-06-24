function Item({text, complete}){
    return(
        <div className="list-item">
            <span> V </span>
            <p> {text} </p>
            <span> X </span>
            
        </div>
        
    );
}

export { Item }