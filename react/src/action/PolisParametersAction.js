import {VALIDATE_POLIS_PARAMETERS, SAVE_POLIS_PARAMETERS, GET_K1, CALCULTATE_POLIS} from '../constants'

export function actionValidatePolisParameters(parameters){
    return {
        type: VALIDATE_POLIS_PARAMETERS,
        payload: parameters
    }
}

export function actionSavePolisParameters(parameters){
    return {
        type: SAVE_POLIS_PARAMETERS,
        payload: parameters
    }
}

// TODO
export function actionSearchVehicle(parameters){
    return {
        type: SAVE_POLIS_PARAMETERS,
        payload: parameters
    }
}


const calculateOSGPO = (options) => {
    const result = 180* options.valueK1 * options.valueK2 // TODO: проверка параметров на существование
    return result;
}

export function actionOptionValuesChange(optionValues){
    
    return {
        type: CALCULTATE_POLIS,
        payload: calculateOSGPO(optionValues)
    }
}