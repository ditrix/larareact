import {SAVE_CLIENT} from '../constants'
import {getCurrentDate} from '../lib/functions'
const initialState = {
    client:{ 
        idResident: true, // вычисляется по типу документа
        lname: 'иванов',  // validate required, size & characters 
        sname: 'иванович',  // validate required, size & characters
        fname: 'иван',  // validate required, size & characters
        ipn: '1234567890',    // validate required, size & characters
        dob: getCurrentDate(),
        doc:{
          type:'1',   // если   id-паспорт громодянина України  
                     // seria не спрашиваем для остальных - есть
          seria: 'seria',
          no:'221',
          dtget: getCurrentDate(),
          source: 'кивским ровд',                  
        },
        addr: 'харьковская 12',
        phone: '551234567',
        email: 'ivan@mail.com',
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
}