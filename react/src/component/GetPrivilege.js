import React from 'react'

export const GetPrivilege = (lang='UA') => {
    return(
        
        <div className="form-input-item-small">
        <label>пільга</label>
        <select>
            <option value='1'>без пільг</option>
            <option value='2'>Учасник війни</option>
            <option value='3'>Інвалід</option>
            <option value='3'>Чорнобилець</option>
            <option value='3'>Пенсіонер</option>
        </select>  
        </div>
        
    )
}
