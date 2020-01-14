import {combineReducers} from 'redux' 
import {reducerPolisParameters} from './parameters'
import {reducerClient} from './client'

export const rootReducer = combineReducers({
    parameters: reducerPolisParameters,
    client: reducerClient,
})

