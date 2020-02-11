import {ACTION_CALC_DGO} from '../constants'
const initialState = {
    dgoInsurSum: 0,
    dgoPaySum: "0",
    dgoType: 0,
}

export const reducerDGO = (state = initialState, action) => {
    switch(action.type){
        case ACTION_CALC_DGO:
            return action.payload
        default:
            return state        
    }
}