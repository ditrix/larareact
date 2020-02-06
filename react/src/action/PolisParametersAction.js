import {VALIDATE_POLIS_PARAMETERS, SAVE_POLIS_PARAMETERS, CALCULTATE_POLIS} from '../constants'
import {getResultOsgpo} from '../calculate'


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
// 
// TODO
export function actionSearchVehicle(parameters){
    return {
        type: SAVE_POLIS_PARAMETERS,
        payload: parameters
    }
}



export function actionOptionValuesChange(values){
    // расчет значений


   //const result = calculateOSGPO(values)
    const result = getResultOsgpo(180,values.par)
    values = result

    return {
        type: CALCULTATE_POLIS,
        payload: values
    }
}