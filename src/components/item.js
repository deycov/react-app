import check from '../check.svg';
import cancel from '../cancel.svg';

function Item({ text, complete, onComplete, onDelete}) {
    return (
        <div className="list-item">
            <img
                className={`check ${complete && "check--active"}`}
                src={check}
                onClick={ onComplete }
            ></img>

            <p className={`text ${complete && "text--active"}`}> {text} </p>

            <img
                className={`cancel ${complete && "cancel--active"}`}
                src={cancel}
                onClick={ onDelete }
            ></img>
        </div>

    );
}

export { Item };