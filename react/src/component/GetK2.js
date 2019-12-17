import React from 'react'

import {dataK2} from '../data/dataK2'

export const GetK2 = (lang='UA') => {
    const k2 = dataK2
    return(
        <div className="form-input-item">
        <select>
        {(k2)&&k2.map((data,index) => 
            (data.in_use === "1")&&<option key={index} value={data.ZONE}>{data.NameU}</option>
          )}
        </select>  
        </div>
    )
}
