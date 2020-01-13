import {combineReducers} from 'redux' 
import {reducerPolisParameters} from './parameters'

export const rootReducer = combineReducers({
    parameters: reducerPolisParameters,
})

