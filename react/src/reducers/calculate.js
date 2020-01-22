import {CALCULTATE_POLIS} from '../constants'

const initialState = {
    par: { 
        k1 : '0',  // тип ТС
        k2 : '0',  // город регистрации
        k3 : '0',  // такси\нетакси  def нетакси
        k4 : '1',  // физ\юр const физ
        k5 : '1',  // период использования const год
        k6 : '1',  // ко убыточности  (вычисляется)
        k7 : '1',  // срок действия   const год
        k8 : '1',  // электрон\не электрон const єлектрон
        k9 :  '1', // дтп были\не были  (игнор)
        k10 : '1', // есть\нет льготы 
        k11 : '1', // убыточн партнеров (игнор)  
        k12 : '2600', // франшиза
        k13 : '1', // сфера использования (игнор) 
    },
    resultPl: 0,
    // valueBP: 180,
    // valueK1: '0',
    // valueK2: '0',
    // valueK3: '0',
    // valueK4: '0',
    // valueK5: '0',
    // valueK6: '0',
    // valueK7: '0',
    // valueK8: '0',

    // valueFranshize: "0",
    // valueDiscount: "0",
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