import React from 'react'

export const GetFranshise = (lang='UA') => {
    return(
        
        <div className="form-input-item-small">
        <label>франшиза (грн.):</label>
        <select>
            <option value='1'>2600</option>
            <option value='2'>1300</option>
            <option value='3'>0</option>
        </select>  
        </div>
        
    )
}
