import {SAVE_POLIS_PARAMETERS,ACTION_SEARCH_VEHICLE } from '../constants'
import {getCurrentDate} from '../lib/functions'

const initialState = {
        valueDiscount: '0',
        valueTaxi: '0',
        isOtk: '0',
        dateOtk: getCurrentDate(),
        valueK1:'00',
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
}

export const reducerPolisParameters = (state = initialState, action) => {
    switch(action.type){
        case SAVE_POLIS_PARAMETERS:
            return action.payload
 
        default:
            return state        
    }
}