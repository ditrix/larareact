import {VALIDATE_POLIS_PARAMETERS, SAVE_POLIS_PARAMETERS} from '../constants'

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
