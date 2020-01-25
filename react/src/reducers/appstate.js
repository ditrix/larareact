import {ACTION_SWITCH_LANG} from '../constants'

const initialState = {
    lang:'ru',
}
export const reducerAppState = (state = initialState, action ) => {
    switch(action.type){
        case ACTION_SWITCH_LANG:
            //const lang = (state.lang === 'ua')?'ru':'ua'
            const lang = action.payload
            return {...state,lang}
        default:
            return state    
    }
    
}