import React from 'react'

export const PaySumm = (summ, title='') => {
    return(
        <div className="pl-summ">
            <label>{title}</label>
            <h5>{summ} грн.</h5>
        </div>
    )
}


export const ItogSumm = (summ, title='') => {
    return(
        <div className="pl-summ">
            <strong>{title}</strong>
            <h4>{summ} грн.</h4>
        </div>
    )
}