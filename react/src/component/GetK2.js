import React from 'react'

import {dataK2} from '../data/dataK2'

export const GetK2 = (lang='UA') => {
    const k2 = dataK2
    return(
        <select>
        {(k2)&&k2.map((data,index) => 
            <option key={index} value={data.ZONE}>{data.NameR}</option>
          )}
        </select>  
    )
}
