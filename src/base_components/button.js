import React from 'react';

function Button(props){
    return(
        <div className="button-container">
            <button id={props.id} onClick={props.evenListener}>{props.name}</button>
        </div>
    )
}
export default Button;