import React from 'react'

export const GetTaxi = () => {
    return(
        <div className="form-input-item-small">

        <label>таксі:</label>
        <select>
            <option value='0'>ні</option>
            <option value='1'>так</option>
        </select>  
        </div>

    )
}