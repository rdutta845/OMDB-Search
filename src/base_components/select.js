import React from 'react';

function Select(props){
    return(
        <div className="select-container">
            <select>
                {props.options && props.options.map((val, id) =>{
                    return(
                        <option value={val.value} key={id}>{val.name}</option>
                    )
                })}
            </select>
        </div>
    )
}
export default Select;