import React,{Component} from 'react'
import {dataK1} from '../data/dataK1'

export const GetK1 = ({getK1Value}) => {
        const k1 = dataK1
        return(
        <div className="form-input-item">
        <label className="block-label">тип транспортного засобу</label>
        <select placeholder="параметри авто" onChange={getK1Value} >
        {(k1)&&k1.map((data,index) => 
            <option key={index} value={data.KO}>{data.nameUA}</option>
          )}
        </select>
        </div>  
        )
}

