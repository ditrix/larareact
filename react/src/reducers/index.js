import {combineReducers} from 'redux' 
import {reducerPolisParameters} from './parameters'
import {reducerClient} from './client'
import {reducerInsuranceObject} from './insobject'

export const rootReducer = combineReducers({
    parameters: reducerPolisParameters,
    client: reducerClient,
    insobject: reducerInsuranceObject,
})

