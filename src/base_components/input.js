import React from 'react';

function Input(props){
    return(
        <div className="input-container">
            <input placeholder={props.placeholder} value={props.value} />
        </div>
    )
}
export default Input;