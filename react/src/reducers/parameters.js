import {SAVE_POLIS_PARAMETERS,ACTION_SEARCH_VEHICLE } from '../constants'
import {getCurrentDate, getTomorrow} from '../lib/functions'

const initialState = {
        valueK10: '0',
        valueK3: '0',
        valueK1:'00',
        valueK2: '0',
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
            VIN: "12212",
            RegNo: 'АА1111АА',
            DMarkID: '3',
            DMarkName: 'BSS NV',
            DModelID: '659',
            DModelName: 'BRANDYS',
            AutoDescr: '',
            DVehicleTypeType: "1",
            FContractID: '',
            ProdYear:'1980',
        },
        validateMess:'',
        valueDiscount:'0',
        valueStartDate: getTomorrow(),
        
}

export const reducerPolisParameters = (state = initialState, action) => {
    switch(action.type){
        case SAVE_POLIS_PARAMETERS:
            return action.payload
        default:
            return state        
    }
}