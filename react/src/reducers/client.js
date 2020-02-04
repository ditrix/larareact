import {SAVE_CLIENT} from '../constants'

const initialState = {
    client:{ 
        idResident: undefined, // вычисляется по типу документа
        lname: 'иванов',  // validate required, size & characters 
        sname: 'иванович',  // validate required, size & characters
        fname: 'иван',  // validate required, size & characters
        ipn: '1234567890',    // validate required, size & characters
        dob: '2020-01-01',
        doc:{
          type:'1',   // если   id-паспорт громодянина України  
                     // seria не спрашиваем для остальных - есть
          seria: 'bb',
          no:'123',
          dtget: '2020-02-01',
          source: 'nyc fbi',                  
        },
        addr: 'js fash',
        phone: '+3801234567890',
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