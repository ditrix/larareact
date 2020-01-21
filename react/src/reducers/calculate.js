import {CALCULTATE_POLIS} from '../constants'

const initialState = {
    resultPl: 0,
    valueBP: 180,
    valueK1: '0',
    valueK2: '0',
    valueK3: '0',
    valueK4: '0',
    valueK5: '0',
    valueK6: '0',
    valueK7: '0',
    valueK8: '0',

    valueFranshize: "0",
    valueDiscount: "0",
}

export const reducerCalculate = (state = initialState, action) => {

    switch(action.type){
        case CALCULTATE_POLIS:
            const newState = Object.assign({},state,action.payload)
            return newState
         default:
            return state        
    }
}