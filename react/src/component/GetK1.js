import React from 'react'
import {dataK1} from '../data/dataK1'

export const GetK1 = (lang='UA') => {
    const k1 = dataK1
    return(
        <div className="parameter-form">
        <div className="form-input-item">
        <label className="block-label">тип транспортного засобу</label>
        <select placeholder="параметри авто" >
        {(k1)&&k1.map((data,index) => 
            <option key={index} value={dataK1.KO}>{data.nameUA}</option>
          )}
        </select>
        </div>  
        </div>
    )
}
