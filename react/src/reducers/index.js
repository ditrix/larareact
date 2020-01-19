import {combineReducers} from 'redux' 
import {reducerPolisParameters} from './parameters'
import {reducerClient} from './client'
import {reducerInsuranceObject} from './insobject'
import {reducerCalculate} from './calculate'

export const rootReducer = combineReducers({
    parameters: reducerPolisParameters,
    client: reducerClient,
    insobject: reducerInsuranceObject,
    calculate: reducerCalculate,
})

