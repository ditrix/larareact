import {ACTION_CALC_DGO,ACTION_GET_DGO,ACTION_GET_ZONE_DGO} from '../constants'
const initialState = {
  
        dgoInsurSum: 0,
        dgoPaySum: "0",
        dgoType: 0,
        zone: 0,
  
}



export const reducerDGO = (state = initialState, action) => {
    // console.log('reducerDGO.state: ',state)
    // console.log('reducerDGO.payload: ',action.payload)
    switch(action.type){
        case ACTION_GET_DGO:
            return {...state, dgoInsurSum:action.payload.dgoInsurSum, dgoType: action.payload.dgoType}
        case ACTION_CALC_DGO:
            // return {...state, dgoPaySum: action.payload.}        
            return state
        case ACTION_GET_ZONE_DGO: {
            return {...state,zone:action.payload}
        }
        default:
            return state        
    }
}