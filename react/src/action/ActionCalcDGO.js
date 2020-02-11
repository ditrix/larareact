import {ACTION_CALC_DGO} from '../constants'

const calculateDGO = param => {
    return {
        dgoType: 1,
        dgoPaySum: '100500',
        dgoInsurSum: 500000,
    }
}

export const actionCalcDGO = dataDGO => {
    return {
        type: ACTION_CALC_DGO,
        payload: calculateDGO(dataDGO)
    }
}