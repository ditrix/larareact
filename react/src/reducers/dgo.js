import {ACTION_CALC_DGO,ACTION_GET_DGO} from '../constants'
const initialState = {
  
        dgoInsurSum: 0,
        dgoPaySum: "0",
        dgoType: 0,
        zone: 0,
  
}

export const reducerDGO = (state = initialState, action) => {
    switch(action.type){
        case ACTION_GET_DGO:
            return action.payload
        case ACTION_CALC_DGO:
            // return {...state, dgoPaySum: action.payload.}        
            return state
        default:
            return state        
    }
}