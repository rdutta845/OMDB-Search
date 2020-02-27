import React from 'react';

function Select(props){
    return(
        <div className="select-container">
            <select defaultValue="" onChange={props.setDropdown}>
                <option value="" disabled>All</option>
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