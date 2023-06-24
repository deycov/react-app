import './list.css'

function List(props){
    return(
        <li className='item'>
            {props.children}
        </li>
    );
}

export { List }