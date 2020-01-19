import {CALCULTATE_POLIS} from '../constants'

const initialState = {
    payOSGPO:'1000',
    payDGO:'1021',
    payTotal:'101020',
    typeDGO:'1',
    summDGO:'100000',
}




export const reducerCalculate = (state = initialState, action) => {
    switch(action.type){
        case CALCULTATE_POLIS:
            return {...state, state:action.payload}
         default:
            return state        
    }
}