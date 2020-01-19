import {ACTION_SAVE_INSOBJECT } from '../constants'

const initialState = {
    auto: {
        markaID: '0',
        modelID: '0',

        marka: '',
        model: '',
        year: '',
        no: '',
        vin: '',
        descr: '',
    },
 
    dataValid: false,

    
    
}

export const reducerInsuranceObject = (state = initialState, action) => {
    switch(action.type){
        case ACTION_SAVE_INSOBJECT:
            return action.payload
        default:
            return state        
    }
}