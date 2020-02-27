import React from 'react';

function Input(props){
    return(
        <div className="input-container">
            <input placeholder={props.placeholder} value={props.value} onChange={props.setValue}/>
        </div>
    )
}
export default Input;