import React from 'react'


export const  SearchResultTemplate = data => {
    
    if(data){
        console.log('SearchResultTemplate',data)
        return(
        <div className="vehicle-info">
        <ul className="vehicle-info-search-result">
        {(data.VIN !== "")&&<li><label>VIN:</label><span>{data.VIN}</span></li>}
        {(data.DMarkName !== "")&&<li><label>марка:</label><span>{data.DMarkName}</span></li>}
        {(data.DModelName !== "")&&<li><label>модель:</label><span>{data.DModelName}</span></li>}
        {(data.AutoDescr !=="")&&<li><label>опис:</label><span>{data.AutoDescr}</span></li>}
        </ul>
        </div>
        )
    }

    return(<span></span>)
}