import {CALCULTATE_POLIS} from '../constants'

const initialState = {
    resultPl: 0,
    valueBP: 180,
    valueK1: '0',
    valueK2: '0',
    valueK3: '0',
    valueFranshize: 0,
    
    calcValueK1: 0,
    calcValueK2: 0,
    calcValueK3: 0,

}




export const reducerCalculate = (state = initialState, action) => {
    switch(action.type){
        case CALCULTATE_POLIS:
            
            //  if(action.payload.valueK1){
            //      return {...state, valueK1:action.payload.valueK1}
            //  }
            
            //  if(action.payload.valueK2){
            //      return {...state, valueK2:action.payload.valueK2.}
            //  }
            // return state
            return {...state, state:action.payload}

         default:
            return state        
    }
}