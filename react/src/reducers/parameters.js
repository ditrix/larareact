import {SAVE_POLIS_PARAMETERS,ACTION_SEARCH_VEHICLE } from '../constants'
import {getCurrentDate} from '../lib/functions'

const initialState = {
        valueK10: '0',
        valueK3: '0',
        valueK1:'00',
        valueK2: '0',
        isOtk: '0',
        dateOtk: getCurrentDate(),
        
        city: {
            id: "0",
            nameRu: "--место регистрации--",
            nameUa: "--місце реєстрації--",
            zone:"0",
            zone_dgo: "0",
        },
        action: ACTION_SEARCH_VEHICLE,
        vehicle:  {
            VIN: "",
            RegNo: '',
            DMarkID: '',
            DMarkName: '',
            DModelID: '',
            DModelName: '',
            AutoDescr: '',
            DVehicleTypeType: "00",
            FContractID: '',
            ProdYear:'',
        },
        validateMess:'',
        valueDiscount:'0',
}

export const reducerPolisParameters = (state = initialState, action) => {
    switch(action.type){
        case SAVE_POLIS_PARAMETERS:
            return action.payload
 
        default:
            return state        
    }
}