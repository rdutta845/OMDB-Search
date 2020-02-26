import React from 'react';

function Select(props){
    return(
        <div className="select-container">
            <select defaultValue="">
                <option value="" disabled></option>
                {props.options && props.options.map((val, id) =>{
                    return(
                        <option value={val.value} key={id} onChange={() => props.setDropdown(val.value)}>{val.name}</option>
                    )
                })}
            </select>
        </div>
    )
}
export default Select;