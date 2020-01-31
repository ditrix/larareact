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
        <div className="pl-summ-itog clearfix">
            <h5>{title}</h5>
            <h5>{summ} грн.</h5>
        </div>
    )
}