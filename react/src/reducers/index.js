import {combineReducers} from 'redux' 
import {reducerPolisParameters} from './parameters'
import {reducerClient} from './client'
import {reducerInsuranceObject} from './insobject'
import {reducerCalculate} from './calculate'
import {reducerAppState} from './appstate'

export const rootReducer = combineReducers({
    parameters: reducerPolisParameters,
    client: reducerClient,
    insobject: reducerInsuranceObject,
    calculate: reducerCalculate,
    appstate: reducerAppState,
})

