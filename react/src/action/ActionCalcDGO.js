// eslint-disable-next-line
import {ACTION_CALC_DGO, ACTION_GET_DGO} from '../constants'

const calculateDGO = param => {
    return {
        dgoType:  param.dgoType,
        dgoPaySum: param.dgoPaySum,
        dgoInsurSum: param.dgoInsurSum,
    }
}

export const actionGetDGO = dataDGO => {
    return {
        type: ACTION_GET_DGO,
        payload: calculateDGO(dataDGO)
    }
}