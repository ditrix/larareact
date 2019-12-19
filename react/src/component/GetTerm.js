import React from 'react'

export const GetTerm = () => {
    return(
        <div className="form-input-item-small">
            <label>термін дії:</label>
            <select>
                <option value='12'>12 місяців</option>
                <option value='10'>10 місяців</option>
                <option value='9'>9 місяців</option>
                <option value='8'>8 місяців</option>
                <option value='7'>7 місяців</option>
                <option value='6'>6 місяців</option>
                <option value='5'>5 місяців</option>
                <option value='4'>2 місяця</option>
                <option value='3'>2 місяця</option>
                <option value='2'>2 місяця</option>
                <option value='1'>1 місяць</option>
                <option value='15'>15 діб</option>
            </select>  
        </div>
    )
}