import React from 'react'

export const PaySumm = (summ, lang='us') => {
    return(<div className="pl-summ">
        <label>до сплати</label>
            <h4>{summ}</h4><h4>грн.</h4>
        </div>
    )
}