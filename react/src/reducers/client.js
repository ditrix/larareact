import {SAVE_CLIENT} from '../constants'

const initialState = {
    client:{ 
        idResident: undefined, // вычисляется по типу документа
        lname: '',  // validate required, size & characters 
        sname: '',  // validate required, size & characters
        fname: '',  // validate required, size & characters
        ipn: '',    // validate required, size & characters
        dob: undefined,
        doc:{
          type:'1',   // если   id-паспорт громодянина України  
                     // seria не спрашиваем для остальных - есть
          seria: '',
          no:'',
          dtget: undefined,
          source: '',                  
        },
        addr: '',
        phone: '',
        email: '',
    },
    msgLNameValid: '',
    msgFNameValid: '',
    msgSNameValid: '',
    msgIpnValid: '',
    msgDOBValid: '',
    msgDocTypeValid: '',
    msgDocSeriaValid: '',
    msgDocNoValid: '',
    msgDocDtGetValid: '',
    msgDocSourceValid: '',
    msgAddrValid: '',
    msgPhoneValid: '',
    msgEmailValid:'',
    formValid:false,
}


export const reducerClient = (state = initialState, action) => {
    switch(action.type){
        case SAVE_CLIENT:
            return action.payload
         default:
            return state        
    }
    return state
}